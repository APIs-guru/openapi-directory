import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TranslateGifQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=s" })
  s: string;
}


export class TranslateGif200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.Gif;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: shared.Meta;
}


export class TranslateGifRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TranslateGifQueryParams;
}


export class TranslateGifResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  translateGif200ApplicationJsonObject?: TranslateGif200ApplicationJson;
}
