import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TrendingStickersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rating" })
  rating?: string;
}


export class TrendingStickersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TrendingStickersQueryParams;
}


export class TrendingStickers200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Gif })
  data?: shared.Gif[];

  @Metadata({ data: "json, name=meta" })
  meta?: shared.Meta;

  @Metadata({ data: "json, name=pagination" })
  pagination?: shared.Pagination;
}


export class TrendingStickersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trendingStickers200ApplicationJsonObject?: TrendingStickers200ApplicationJson;
}
