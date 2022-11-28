import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGifsByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string;
}


export class GetGifsById200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Gif })
  data?: shared.Gif[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: shared.Meta;

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: shared.Pagination;
}


export class GetGifsByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGifsByIdQueryParams;
}


export class GetGifsByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getGifsById200ApplicationJsonObject?: GetGifsById200ApplicationJson;
}
