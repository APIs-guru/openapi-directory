import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDailyReportByCountryCodeDateFormatEnum {
    YyyyMmDd = "YYYY-MM-DD",
    YyyyDdMm = "YYYY-DD-MM",
    DdMmYyyy = "DD-MM-YYYY",
    MmDdYyyy = "MM-DD-YYYY"
}

export enum GetDailyReportByCountryCodeFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class GetDailyReportByCountryCodeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date-format" })
  dateFormat?: GetDailyReportByCountryCodeDateFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetDailyReportByCountryCodeFormatEnum;
}


export class GetDailyReportByCountryCode200ApplicationJsonProvince extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: number;

  @SpeakeasyMetadata({ data: "json, name=confirmed" })
  confirmed?: number;

  @SpeakeasyMetadata({ data: "json, name=deaths" })
  deaths?: number;

  @SpeakeasyMetadata({ data: "json, name=recovered" })
  recovered?: number;
}


export class GetDailyReportByCountryCode200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=province", elemType: GetDailyReportByCountryCode200ApplicationJsonProvince })
  province?: GetDailyReportByCountryCode200ApplicationJsonProvince[];
}


export class GetDailyReportByCountryCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDailyReportByCountryCodeQueryParams;
}


export class GetDailyReportByCountryCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: GetDailyReportByCountryCode200ApplicationJson })
  getDailyReportByCountryCode200ApplicationJsonObjects?: GetDailyReportByCountryCode200ApplicationJson[];
}
