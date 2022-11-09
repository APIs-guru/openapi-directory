import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDailyReportAllCountriesDateFormatEnum {
    YyyyMmDd = "YYYY-MM-DD"
,    YyyyDdMm = "YYYY-DD-MM"
,    DdMmYyyy = "DD-MM-YYYY"
,    MmDdYyyy = "MM-DD-YYYY"
}

export enum GetDailyReportAllCountriesFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class GetDailyReportAllCountriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=date" })
  date: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date-format" })
  dateFormat?: GetDailyReportAllCountriesDateFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetDailyReportAllCountriesFormatEnum;
}


export class GetDailyReportAllCountriesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDailyReportAllCountriesQueryParams;
}


export class GetDailyReportAllCountries200ApplicationJsonProvince extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: number;

  @Metadata({ data: "json, name=confirmed" })
  confirmed?: number;

  @Metadata({ data: "json, name=deaths" })
  deaths?: number;

  @Metadata({ data: "json, name=recovered" })
  recovered?: number;
}


export class GetDailyReportAllCountries200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=province", elemType: operations.GetDailyReportAllCountries200ApplicationJsonProvince })
  province?: GetDailyReportAllCountries200ApplicationJsonProvince[];
}


export class GetDailyReportAllCountriesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: operations.GetDailyReportAllCountries200ApplicationJson })
  getDailyReportAllCountries200ApplicationJsonObjects?: GetDailyReportAllCountries200ApplicationJson[];
}
