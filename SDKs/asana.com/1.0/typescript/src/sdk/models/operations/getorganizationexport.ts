import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOrganizationExportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization_export_gid" })
  organizationExportGid: string;
}


export class GetOrganizationExportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetOrganizationExport200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.OrganizationExportResponse;
}


export class GetOrganizationExportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationExportPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOrganizationExportQueryParams;
}


export class GetOrganizationExportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationExport200ApplicationJsonObject?: GetOrganizationExport200ApplicationJson;
}
