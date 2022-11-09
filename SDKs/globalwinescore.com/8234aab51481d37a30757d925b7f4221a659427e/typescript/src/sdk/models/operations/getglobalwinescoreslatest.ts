import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGlobalwinescoresLatestColorEnum {
    Red = "red"
,    White = "white"
,    Pink = "pink"
}

export enum GetGlobalwinescoresLatestOrderingEnum {
    Date = "date"
,    MinusDate = "-date"
,    Score = "score"
,    MinusScore = "-score"
}


export class GetGlobalwinescoresLatestQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=color" })
  color?: GetGlobalwinescoresLatestColorEnum;

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
  ordering?: GetGlobalwinescoresLatestOrderingEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vintage" })
  vintage?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=wine_id" })
  wineId?: number[];
}


export class GetGlobalwinescoresLatestHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization?: string;
}


export class GetGlobalwinescoresLatestRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGlobalwinescoresLatestQueryParams;

  @Metadata()
  headers: GetGlobalwinescoresLatestHeaders;
}


export class GetGlobalwinescoresLatestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
