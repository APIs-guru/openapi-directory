import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ListHistoricalGwsColorEnum {
    Red = "red",
    White = "white",
    Pink = "pink"
}

export enum ListHistoricalGwsOrderingEnum {
    Date = "date",
    MinusDate = "-date",
    Score = "score",
    MinusScore = "-score"
}


export class ListHistoricalGwsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color" })
  color?: ListHistoricalGwsColorEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_primeurs" })
  isPrimeurs?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lwin" })
  lwin?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lwin_11" })
  lwin11?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ordering" })
  ordering?: ListHistoricalGwsOrderingEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vintage" })
  vintage?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=wine_id" })
  wineId?: number[];
}


export class ListHistoricalGwsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization?: string;
}


export class ListHistoricalGwsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListHistoricalGwsQueryParams;

  @SpeakeasyMetadata()
  headers: ListHistoricalGwsHeaders;
}


export class ListHistoricalGwsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
