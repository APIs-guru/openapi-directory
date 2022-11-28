import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetOrganizationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_locations" })
  includeLocations?: boolean;
}


export class GetOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOrganizationQueryParams;
}


export class GetOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
