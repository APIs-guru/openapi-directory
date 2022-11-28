import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDailyReportAllCountriesDateFormatEnum {
    YyyyMmDd = "YYYY-MM-DD",
    YyyyDdMm = "YYYY-DD-MM",
    DdMmYyyy = "DD-MM-YYYY",
    MmDdYyyy = "MM-DD-YYYY"
}

export enum GetDailyReportAllCountriesFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class GetDailyReportAllCountriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date-format" })
  dateFormat?: GetDailyReportAllCountriesDateFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetDailyReportAllCountriesFormatEnum;
}


export class GetDailyReportAllCountries200ApplicationJsonProvince extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: number;

  @SpeakeasyMetadata({ data: "json, name=confirmed" })
  confirmed?: number;

  @SpeakeasyMetadata({ data: "json, name=deaths" })
  deaths?: number;

  @SpeakeasyMetadata({ data: "json, name=recovered" })
  recovered?: number;
}


export class GetDailyReportAllCountries200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=province", elemType: GetDailyReportAllCountries200ApplicationJsonProvince })
  province?: GetDailyReportAllCountries200ApplicationJsonProvince[];
}


export class GetDailyReportAllCountriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDailyReportAllCountriesQueryParams;
}


export class GetDailyReportAllCountriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: GetDailyReportAllCountries200ApplicationJson })
  getDailyReportAllCountries200ApplicationJsonObjects?: GetDailyReportAllCountries200ApplicationJson[];
}
