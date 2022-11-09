import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OrgsGetAuditLogPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class OrgsGetAuditLogQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: shared.AuditLogIncludeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: shared.AuditLogOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=phrase" })
  phrase?: string;
}


export class OrgsGetAuditLogRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OrgsGetAuditLogPathParams;

  @Metadata()
  queryParams: OrgsGetAuditLogQueryParams;
}


export class OrgsGetAuditLogResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.AuditLogEvent })
  auditLogEvents?: shared.AuditLogEvent[];
}
