import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetLatestTotalsFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class GetLatestTotalsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetLatestTotalsFormatEnum;
}


export class GetLatestTotalsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLatestTotalsQueryParams;
}


export class GetLatestTotals200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=confirmed" })
  confirmed?: number;

  @Metadata({ data: "json, name=critical" })
  critical?: number;

  @Metadata({ data: "json, name=deaths" })
  deaths?: number;

  @Metadata({ data: "json, name=lastChange" })
  lastChange?: Date;

  @Metadata({ data: "json, name=lastUpdate" })
  lastUpdate?: Date;

  @Metadata({ data: "json, name=recovered" })
  recovered?: number;
}


export class GetLatestTotalsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: operations.GetLatestTotals200ApplicationJson })
  getLatestTotals200ApplicationJsonObjects?: GetLatestTotals200ApplicationJson[];
}
