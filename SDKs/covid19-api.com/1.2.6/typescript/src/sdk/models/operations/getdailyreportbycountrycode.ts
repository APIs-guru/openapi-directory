import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDailyReportByCountryCodeDateFormatEnum {
    YyyyMmDd = "YYYY-MM-DD"
,    YyyyDdMm = "YYYY-DD-MM"
,    DdMmYyyy = "DD-MM-YYYY"
,    MmDdYyyy = "MM-DD-YYYY"
}

export enum GetDailyReportByCountryCodeFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class GetDailyReportByCountryCodeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=code" })
  code: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date" })
  date: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date-format" })
  dateFormat?: GetDailyReportByCountryCodeDateFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetDailyReportByCountryCodeFormatEnum;
}


export class GetDailyReportByCountryCodeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDailyReportByCountryCodeQueryParams;
}


export class GetDailyReportByCountryCode200ApplicationJsonProvince extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: number;

  @Metadata({ data: "json, name=confirmed" })
  confirmed?: number;

  @Metadata({ data: "json, name=deaths" })
  deaths?: number;

  @Metadata({ data: "json, name=recovered" })
  recovered?: number;
}


export class GetDailyReportByCountryCode200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=province", elemType: operations.GetDailyReportByCountryCode200ApplicationJsonProvince })
  province?: GetDailyReportByCountryCode200ApplicationJsonProvince[];
}


export class GetDailyReportByCountryCodeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: operations.GetDailyReportByCountryCode200ApplicationJson })
  getDailyReportByCountryCode200ApplicationJsonObjects?: GetDailyReportByCountryCode200ApplicationJson[];
}
