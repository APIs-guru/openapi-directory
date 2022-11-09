import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RandomStickerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=rating" })
  rating?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;
}


export class RandomStickerRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RandomStickerQueryParams;
}


export class RandomSticker200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.Gif;

  @Metadata({ data: "json, name=meta" })
  meta?: shared.Meta;
}


export class RandomStickerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  randomSticker200ApplicationJsonObject?: RandomSticker200ApplicationJson;
}
