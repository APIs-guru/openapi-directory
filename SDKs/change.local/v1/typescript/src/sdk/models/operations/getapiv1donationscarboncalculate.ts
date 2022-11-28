import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetApiV1DonationsCarbonCalculateTransportationMethodEnum {
    Air = "air",
    Truck = "truck",
    Rail = "rail",
    Sea = "sea"
}


export class GetApiV1DonationsCarbonCalculateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destination_address" })
  destinationAddress?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distance_mi" })
  distanceMi?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=origin_address" })
  originAddress?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transportation_method" })
  transportationMethod?: GetApiV1DonationsCarbonCalculateTransportationMethodEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=weight_lb" })
  weightLb: number;
}


export class GetApiV1DonationsCarbonCalculateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetApiV1DonationsCarbonCalculateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiV1DonationsCarbonCalculateQueryParams;

  @SpeakeasyMetadata()
  security: GetApiV1DonationsCarbonCalculateSecurity;
}


export class GetApiV1DonationsCarbonCalculateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
