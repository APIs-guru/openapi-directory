import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetHistory2VehicleHistoryGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vin" })
  vin: string;
}


export class GetHistory2VehicleHistoryGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetHistory2VehicleHistoryGetQueryParams;
}


export class GetHistory2VehicleHistoryGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  historyResp?: shared.HistoryResp;

  @Metadata()
  statusCode: number;
}
