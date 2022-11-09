import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOrganizationExportPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organization_export_gid" })
  organizationExportGid: string;
}


export class GetOrganizationExportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetOrganizationExportRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationExportPathParams;

  @Metadata()
  queryParams: GetOrganizationExportQueryParams;
}


export class GetOrganizationExport200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.OrganizationExportResponse;
}


export class GetOrganizationExportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationExport200ApplicationJsonObject?: GetOrganizationExport200ApplicationJson;
}
