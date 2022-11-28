import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOrganizationAuditlogsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationAuditlogsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auditLogType" })
  auditLogType?: Map<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=configId" })
  configId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=environmentId" })
  environmentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromUtcDateTime" })
  fromUtcDateTime?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toUtcDateTime" })
  toUtcDateTime?: Date;
}


export class GetOrganizationAuditlogsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationAuditlogsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOrganizationAuditlogsQueryParams;
}


export class GetOrganizationAuditlogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AuditLogItemModel })
  auditLogItemModels?: shared.AuditLogItemModel[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
