import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1DonationsCarbonStatsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: number;
}


export class GetApiV1DonationsCarbonStatsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetApiV1DonationsCarbonStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiV1DonationsCarbonStatsQueryParams;

  @SpeakeasyMetadata()
  security: GetApiV1DonationsCarbonStatsSecurity;
}


export class GetApiV1DonationsCarbonStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
