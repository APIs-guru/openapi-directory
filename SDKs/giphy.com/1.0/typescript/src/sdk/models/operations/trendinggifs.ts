import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TrendingGifsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rating" })
  rating?: string;
}


export class TrendingGifsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TrendingGifsQueryParams;
}


export class TrendingGifs200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Gif })
  data?: shared.Gif[];

  @Metadata({ data: "json, name=meta" })
  meta?: shared.Meta;

  @Metadata({ data: "json, name=pagination" })
  pagination?: shared.Pagination;
}


export class TrendingGifsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trendingGifs200ApplicationJsonObject?: TrendingGifs200ApplicationJson;
}
