import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RandomGifQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=rating" })
  rating?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;
}


export class RandomGifRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RandomGifQueryParams;
}


export class RandomGif200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.Gif;

  @Metadata({ data: "json, name=meta" })
  meta?: shared.Meta;
}


export class RandomGifResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  randomGif200ApplicationJsonObject?: RandomGif200ApplicationJson;
}
