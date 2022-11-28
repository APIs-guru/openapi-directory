import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetPopularCarsCarTypeEnum {
    New = "new",
    Used = "used"
}

export enum GetPopularCarsCountryEnum {
    UsLower = "us",
    CaLower = "ca",
    UsUpper = "US",
    CaUpper = "CA"
}


export class GetPopularCarsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=car_type" })
  carType: GetPopularCarsCarTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city_state" })
  cityState?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: GetPopularCarsCountryEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string;
}


export class GetPopularCarsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPopularCarsQueryParams;
}


export class GetPopularCarsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  popularCars?: shared.PopularCars;

  @SpeakeasyMetadata()
  statusCode: number;
}
