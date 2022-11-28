import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetChargeStationConnectorsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetChargeStationConnectorsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_evse" })
  includeEvse?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_organization" })
  includeOrganization?: boolean;
}


export class GetChargeStationConnectorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChargeStationConnectorsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetChargeStationConnectorsQueryParams;
}


export class GetChargeStationConnectorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
