import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetChargeStationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetChargeStationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_evses" })
  includeEvses?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_location" })
  includeLocation?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_organization" })
  includeOrganization?: boolean;
}


export class GetChargeStationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChargeStationPathParams;

  @SpeakeasyMetadata()
  queryParams: GetChargeStationQueryParams;
}


export class GetChargeStationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
