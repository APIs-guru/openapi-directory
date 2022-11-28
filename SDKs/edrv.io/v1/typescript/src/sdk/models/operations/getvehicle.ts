import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetVehiclePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetVehicleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_driver" })
  includeDriver?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_organization" })
  includeOrganization?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_token" })
  includeToken?: boolean;
}


export class GetVehicleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVehiclePathParams;

  @SpeakeasyMetadata()
  queryParams: GetVehicleQueryParams;
}


export class GetVehicleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
