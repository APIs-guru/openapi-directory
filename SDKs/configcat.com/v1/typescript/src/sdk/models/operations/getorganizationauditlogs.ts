import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOrganizationAuditlogsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationAuditlogsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=auditLogType" })
  auditLogType?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=configId" })
  configId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=environmentId" })
  environmentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromUtcDateTime" })
  fromUtcDateTime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=productId" })
  productId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=toUtcDateTime" })
  toUtcDateTime?: Date;
}


export class GetOrganizationAuditlogsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationAuditlogsPathParams;

  @Metadata()
  queryParams: GetOrganizationAuditlogsQueryParams;
}


export class GetOrganizationAuditlogsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AuditLogItemModel })
  auditLogItemModels?: shared.AuditLogItemModel[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
