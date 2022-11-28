import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RandomStickerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rating" })
  rating?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;
}


export class RandomSticker200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.Gif;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: shared.Meta;
}


export class RandomStickerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RandomStickerQueryParams;
}


export class RandomStickerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  randomSticker200ApplicationJsonObject?: RandomSticker200ApplicationJson;
}
