import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetLatestTotalsFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class GetLatestTotalsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetLatestTotalsFormatEnum;
}


export class GetLatestTotals200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confirmed" })
  confirmed?: number;

  @SpeakeasyMetadata({ data: "json, name=critical" })
  critical?: number;

  @SpeakeasyMetadata({ data: "json, name=deaths" })
  deaths?: number;

  @SpeakeasyMetadata({ data: "json, name=lastChange" })
  lastChange?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdate" })
  lastUpdate?: Date;

  @SpeakeasyMetadata({ data: "json, name=recovered" })
  recovered?: number;
}


export class GetLatestTotalsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLatestTotalsQueryParams;
}


export class GetLatestTotalsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: GetLatestTotals200ApplicationJson })
  getLatestTotals200ApplicationJsonObjects?: GetLatestTotals200ApplicationJson[];
}
