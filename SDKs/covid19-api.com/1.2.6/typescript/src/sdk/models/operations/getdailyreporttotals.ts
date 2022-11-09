import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDailyReportTotalsDateFormatEnum {
    YyyyMmDd = "YYYY-MM-DD"
,    YyyyDdMm = "YYYY-DD-MM"
,    DdMmYyyy = "DD-MM-YYYY"
,    MmDdYyyy = "MM-DD-YYYY"
}

export enum GetDailyReportTotalsFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class GetDailyReportTotalsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date-format" })
  dateFormat?: GetDailyReportTotalsDateFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetDailyReportTotalsFormatEnum;
}


export class GetDailyReportTotalsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDailyReportTotalsQueryParams;
}


export class GetDailyReportTotals200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: number;

  @Metadata({ data: "json, name=confirmed" })
  confirmed?: number;

  @Metadata({ data: "json, name=critical" })
  critical?: number;

  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=deaths" })
  deaths?: number;

  @Metadata({ data: "json, name=recovered" })
  recovered?: number;
}


export class GetDailyReportTotalsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: operations.GetDailyReportTotals200ApplicationJson })
  getDailyReportTotals200ApplicationJsonObjects?: GetDailyReportTotals200ApplicationJson[];
}
