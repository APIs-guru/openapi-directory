import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetDailyStatsCarTypeEnum {
    New = "new"
,    Used = "used"
}

export enum GetDailyStatsCountryEnum {
    Us = "us"
,    Ca = "ca"
}


export class GetDailyStatsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=car_type" })
  carType?: GetDailyStatsCarTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=city_state" })
  cityState?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: GetDailyStatsCountryEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=taxonomy_vin" })
  taxonomyVin?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vin" })
  vin?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ymm" })
  ymm?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ymmt" })
  ymmt?: string;
}


export class GetDailyStatsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDailyStatsQueryParams;
}


export class GetDailyStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dailyStats?: shared.DailyStats;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
