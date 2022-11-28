import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDailyReportTotalsDateFormatEnum {
    YyyyMmDd = "YYYY-MM-DD",
    YyyyDdMm = "YYYY-DD-MM",
    DdMmYyyy = "DD-MM-YYYY",
    MmDdYyyy = "MM-DD-YYYY"
}

export enum GetDailyReportTotalsFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class GetDailyReportTotalsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date-format" })
  dateFormat?: GetDailyReportTotalsDateFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetDailyReportTotalsFormatEnum;
}


export class GetDailyReportTotals200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: number;

  @SpeakeasyMetadata({ data: "json, name=confirmed" })
  confirmed?: number;

  @SpeakeasyMetadata({ data: "json, name=critical" })
  critical?: number;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=deaths" })
  deaths?: number;

  @SpeakeasyMetadata({ data: "json, name=recovered" })
  recovered?: number;
}


export class GetDailyReportTotalsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDailyReportTotalsQueryParams;
}


export class GetDailyReportTotalsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: GetDailyReportTotals200ApplicationJson })
  getDailyReportTotals200ApplicationJsonObjects?: GetDailyReportTotals200ApplicationJson[];
}
