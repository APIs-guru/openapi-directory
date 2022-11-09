import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ListHistoricalGwsColorEnum {
    Red = "red"
,    White = "white"
,    Pink = "pink"
}

export enum ListHistoricalGwsOrderingEnum {
    Date = "date"
,    MinusDate = "-date"
,    Score = "score"
,    MinusScore = "-score"
}


export class ListHistoricalGwsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=color" })
  color?: ListHistoricalGwsColorEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_primeurs" })
  isPrimeurs?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lwin" })
  lwin?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lwin_11" })
  lwin11?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ordering" })
  ordering?: ListHistoricalGwsOrderingEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vintage" })
  vintage?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=wine_id" })
  wineId?: number[];
}


export class ListHistoricalGwsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization?: string;
}


export class ListHistoricalGwsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListHistoricalGwsQueryParams;

  @Metadata()
  headers: ListHistoricalGwsHeaders;
}


export class ListHistoricalGwsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
