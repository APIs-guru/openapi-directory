import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAuditlogsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class GetAuditlogsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=auditLogType" })
  auditLogType?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=configId" })
  configId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=environmentId" })
  environmentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromUtcDateTime" })
  fromUtcDateTime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=toUtcDateTime" })
  toUtcDateTime?: Date;
}


export class GetAuditlogsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAuditlogsPathParams;

  @Metadata()
  queryParams: GetAuditlogsQueryParams;
}


export class GetAuditlogsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AuditLogItemModel })
  auditLogItemModels?: shared.AuditLogItemModel[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
