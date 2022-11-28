import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetDailyStatsCarTypeEnum {
    New = "new",
    Used = "used"
}

export enum GetDailyStatsCountryEnum {
    Us = "us",
    Ca = "ca"
}


export class GetDailyStatsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=car_type" })
  carType?: GetDailyStatsCarTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city_state" })
  cityState?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: GetDailyStatsCountryEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=taxonomy_vin" })
  taxonomyVin?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vin" })
  vin?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ymm" })
  ymm?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ymmt" })
  ymmt?: string;
}


export class GetDailyStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDailyStatsQueryParams;
}


export class GetDailyStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dailyStats?: shared.DailyStats;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
