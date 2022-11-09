import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetApiV1DonationsCarbonCalculateTransportationMethodEnum {
    Air = "air"
,    Truck = "truck"
,    Rail = "rail"
,    Sea = "sea"
}


export class GetApiV1DonationsCarbonCalculateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=destination_address" })
  destinationAddress?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=distance_mi" })
  distanceMi?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=origin_address" })
  originAddress?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=transportation_method" })
  transportationMethod?: GetApiV1DonationsCarbonCalculateTransportationMethodEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=weight_lb" })
  weightLb: number;
}


export class GetApiV1DonationsCarbonCalculateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetApiV1DonationsCarbonCalculateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiV1DonationsCarbonCalculateQueryParams;

  @Metadata()
  security: GetApiV1DonationsCarbonCalculateSecurity;
}


export class GetApiV1DonationsCarbonCalculateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
