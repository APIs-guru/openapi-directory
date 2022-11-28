import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetHistory2VehicleHistoryGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vin" })
  vin: string;
}


export class GetHistory2VehicleHistoryGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetHistory2VehicleHistoryGetQueryParams;
}


export class GetHistory2VehicleHistoryGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  historyResp?: shared.HistoryResp;

  @SpeakeasyMetadata()
  statusCode: number;
}
