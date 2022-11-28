import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TrendingStickersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rating" })
  rating?: string;
}


export class TrendingStickers200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Gif })
  data?: shared.Gif[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: shared.Meta;

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: shared.Pagination;
}


export class TrendingStickersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TrendingStickersQueryParams;
}


export class TrendingStickersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trendingStickers200ApplicationJsonObject?: TrendingStickers200ApplicationJson;
}
