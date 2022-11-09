import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchGifsQueryParams extends SpeakeasyBase {
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


export class SearchGifsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchGifsQueryParams;
}


export class SearchGifs200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Gif })
  data?: shared.Gif[];

  @Metadata({ data: "json, name=meta" })
  meta?: shared.Meta;

  @Metadata({ data: "json, name=pagination" })
  pagination?: shared.Pagination;
}


export class SearchGifsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  searchGifs200ApplicationJsonObject?: SearchGifs200ApplicationJson;
}
