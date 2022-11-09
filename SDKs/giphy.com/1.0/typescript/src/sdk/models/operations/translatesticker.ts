import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TranslateStickerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=s" })
  s: string;
}


export class TranslateStickerRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TranslateStickerQueryParams;
}


export class TranslateSticker200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.Gif;

  @Metadata({ data: "json, name=meta" })
  meta?: shared.Meta;
}


export class TranslateStickerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  translateSticker200ApplicationJsonObject?: TranslateSticker200ApplicationJson;
}
