import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetPopularCarsCarTypeEnum {
    New = "new"
,    Used = "used"
}

export enum GetPopularCarsCountryEnum {
    UsLower = "us"
,    CaLower = "ca"
,    UsUpper = "US"
,    CaUpper = "CA"
}


export class GetPopularCarsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=car_type" })
  carType: GetPopularCarsCarTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=city_state" })
  cityState?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: GetPopularCarsCountryEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string;
}


export class GetPopularCarsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPopularCarsQueryParams;
}


export class GetPopularCarsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  popularCars?: shared.PopularCars;

  @Metadata()
  statusCode: number;
}
