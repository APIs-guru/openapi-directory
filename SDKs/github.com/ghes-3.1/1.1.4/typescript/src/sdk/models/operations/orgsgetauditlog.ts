import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OrgsGetAuditLogPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class OrgsGetAuditLogQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: shared.AuditLogIncludeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: shared.AuditLogOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=phrase" })
  phrase?: string;
}


export class OrgsGetAuditLogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OrgsGetAuditLogPathParams;

  @SpeakeasyMetadata()
  queryParams: OrgsGetAuditLogQueryParams;
}


export class OrgsGetAuditLogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.AuditLogEvent })
  auditLogEvents?: shared.AuditLogEvent[];
}
