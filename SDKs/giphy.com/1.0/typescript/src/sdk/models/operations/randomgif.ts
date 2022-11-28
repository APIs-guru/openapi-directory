import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RandomGifQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rating" })
  rating?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;
}


export class RandomGif200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.Gif;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: shared.Meta;
}


export class RandomGifRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RandomGifQueryParams;
}


export class RandomGifResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  randomGif200ApplicationJsonObject?: RandomGif200ApplicationJson;
}
