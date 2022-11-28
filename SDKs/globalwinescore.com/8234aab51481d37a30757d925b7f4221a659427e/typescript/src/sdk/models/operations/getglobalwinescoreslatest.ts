import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGlobalwinescoresLatestColorEnum {
    Red = "red",
    White = "white",
    Pink = "pink"
}

export enum GetGlobalwinescoresLatestOrderingEnum {
    Date = "date",
    MinusDate = "-date",
    Score = "score",
    MinusScore = "-score"
}


export class GetGlobalwinescoresLatestQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color" })
  color?: GetGlobalwinescoresLatestColorEnum;

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
  ordering?: GetGlobalwinescoresLatestOrderingEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vintage" })
  vintage?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=wine_id" })
  wineId?: number[];
}


export class GetGlobalwinescoresLatestHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization?: string;
}


export class GetGlobalwinescoresLatestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGlobalwinescoresLatestQueryParams;

  @SpeakeasyMetadata()
  headers: GetGlobalwinescoresLatestHeaders;
}


export class GetGlobalwinescoresLatestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
