import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TrendingGifsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rating" })
  rating?: string;
}


export class TrendingGifs200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Gif })
  data?: shared.Gif[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: shared.Meta;

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: shared.Pagination;
}


export class TrendingGifsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TrendingGifsQueryParams;
}


export class TrendingGifsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trendingGifs200ApplicationJsonObject?: TrendingGifs200ApplicationJson;
}
