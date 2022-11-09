import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetOrganizationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include_locations" })
  includeLocations?: boolean;
}


export class GetOrganizationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationPathParams;

  @Metadata()
  queryParams: GetOrganizationQueryParams;
}


export class GetOrganizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
