import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchStickersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rating" })
  rating?: string;
}


export class SearchStickers200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Gif })
  data?: shared.Gif[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: shared.Meta;

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: shared.Pagination;
}


export class SearchStickersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchStickersQueryParams;
}


export class SearchStickersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  searchStickers200ApplicationJsonObject?: SearchStickers200ApplicationJson;
}
