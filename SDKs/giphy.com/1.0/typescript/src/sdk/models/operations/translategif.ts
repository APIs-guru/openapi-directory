import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TranslateGifQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=s" })
  s: string;
}


export class TranslateGifRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TranslateGifQueryParams;
}


export class TranslateGif200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.Gif;

  @Metadata({ data: "json, name=meta" })
  meta?: shared.Meta;
}


export class TranslateGifResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  translateGif200ApplicationJsonObject?: TranslateGif200ApplicationJson;
}
