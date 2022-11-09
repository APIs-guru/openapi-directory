import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchStickersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rating" })
  rating?: string;
}


export class SearchStickersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchStickersQueryParams;
}


export class SearchStickers200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Gif })
  data?: shared.Gif[];

  @Metadata({ data: "json, name=meta" })
  meta?: shared.Meta;

  @Metadata({ data: "json, name=pagination" })
  pagination?: shared.Pagination;
}


export class SearchStickersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  searchStickers200ApplicationJsonObject?: SearchStickers200ApplicationJson;
}
