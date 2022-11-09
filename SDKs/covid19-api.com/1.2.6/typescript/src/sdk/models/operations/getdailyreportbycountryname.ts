import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDailyReportByCountryNameDateFormatEnum {
    YyyyMmDd = "YYYY-MM-DD"
,    YyyyDdMm = "YYYY-DD-MM"
,    DdMmYyyy = "DD-MM-YYYY"
,    MmDdYyyy = "MM-DD-YYYY"
}

export enum GetDailyReportByCountryNameFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class GetDailyReportByCountryNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=date" })
  date: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date-format" })
  dateFormat?: GetDailyReportByCountryNameDateFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetDailyReportByCountryNameFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;
}


export class GetDailyReportByCountryNameRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDailyReportByCountryNameQueryParams;
}


export class GetDailyReportByCountryName200ApplicationJsonProvince extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: number;

  @Metadata({ data: "json, name=confirmed" })
  confirmed?: number;

  @Metadata({ data: "json, name=deaths" })
  deaths?: number;

  @Metadata({ data: "json, name=recovered" })
  recovered?: number;
}


export class GetDailyReportByCountryName200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=province", elemType: operations.GetDailyReportByCountryName200ApplicationJsonProvince })
  province?: GetDailyReportByCountryName200ApplicationJsonProvince[];
}


export class GetDailyReportByCountryNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: operations.GetDailyReportByCountryName200ApplicationJson })
  getDailyReportByCountryName200ApplicationJsonObjects?: GetDailyReportByCountryName200ApplicationJson[];
}
