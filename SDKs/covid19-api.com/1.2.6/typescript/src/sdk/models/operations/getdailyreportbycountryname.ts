import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDailyReportByCountryNameDateFormatEnum {
    YyyyMmDd = "YYYY-MM-DD",
    YyyyDdMm = "YYYY-DD-MM",
    DdMmYyyy = "DD-MM-YYYY",
    MmDdYyyy = "MM-DD-YYYY"
}

export enum GetDailyReportByCountryNameFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class GetDailyReportByCountryNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date-format" })
  dateFormat?: GetDailyReportByCountryNameDateFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetDailyReportByCountryNameFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;
}


export class GetDailyReportByCountryName200ApplicationJsonProvince extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: number;

  @SpeakeasyMetadata({ data: "json, name=confirmed" })
  confirmed?: number;

  @SpeakeasyMetadata({ data: "json, name=deaths" })
  deaths?: number;

  @SpeakeasyMetadata({ data: "json, name=recovered" })
  recovered?: number;
}


export class GetDailyReportByCountryName200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=province", elemType: GetDailyReportByCountryName200ApplicationJsonProvince })
  province?: GetDailyReportByCountryName200ApplicationJsonProvince[];
}


export class GetDailyReportByCountryNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDailyReportByCountryNameQueryParams;
}


export class GetDailyReportByCountryNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: GetDailyReportByCountryName200ApplicationJson })
  getDailyReportByCountryName200ApplicationJsonObjects?: GetDailyReportByCountryName200ApplicationJson[];
}
