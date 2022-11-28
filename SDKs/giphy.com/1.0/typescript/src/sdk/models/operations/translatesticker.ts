import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TranslateStickerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=s" })
  s: string;
}


export class TranslateSticker200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.Gif;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: shared.Meta;
}


export class TranslateStickerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TranslateStickerQueryParams;
}


export class TranslateStickerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  translateSticker200ApplicationJsonObject?: TranslateSticker200ApplicationJson;
}
