import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLocationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetLocationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_chargestations" })
  includeChargestations?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_organization" })
  includeOrganization?: boolean;
}


export class GetLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLocationPathParams;

  @SpeakeasyMetadata()
  queryParams: GetLocationQueryParams;
}


export class GetLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
