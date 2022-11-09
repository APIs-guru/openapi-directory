import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGifsByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string;
}


export class GetGifsByIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGifsByIdQueryParams;
}


export class GetGifsById200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Gif })
  data?: shared.Gif[];

  @Metadata({ data: "json, name=meta" })
  meta?: shared.Meta;

  @Metadata({ data: "json, name=pagination" })
  pagination?: shared.Pagination;
}


export class GetGifsByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getGifsById200ApplicationJsonObject?: GetGifsById200ApplicationJson;
}
