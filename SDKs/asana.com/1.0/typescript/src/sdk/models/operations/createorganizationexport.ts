import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateOrganizationExportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateOrganizationExportRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.OrganizationExportRequest;
}


export class CreateOrganizationExportRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateOrganizationExportQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateOrganizationExportRequestBody;
}


export class CreateOrganizationExport201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.OrganizationExportResponse;
}


export class CreateOrganizationExportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  createOrganizationExport201ApplicationJsonObject?: CreateOrganizationExport201ApplicationJson;
}
