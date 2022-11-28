import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAuditlogsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class GetAuditlogsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auditLogType" })
  auditLogType?: Map<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=configId" })
  configId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=environmentId" })
  environmentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromUtcDateTime" })
  fromUtcDateTime?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toUtcDateTime" })
  toUtcDateTime?: Date;
}


export class GetAuditlogsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAuditlogsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAuditlogsQueryParams;
}


export class GetAuditlogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AuditLogItemModel })
  auditLogItemModels?: shared.AuditLogItemModel[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
