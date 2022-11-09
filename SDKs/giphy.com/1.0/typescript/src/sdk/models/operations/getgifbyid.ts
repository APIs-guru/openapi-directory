import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGifByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=gifId" })
  gifId: number;
}


export class GetGifByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGifByIdPathParams;
}


export class GetGifById200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.Gif;

  @Metadata({ data: "json, name=meta" })
  meta?: shared.Meta;
}


export class GetGifByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getGifById200ApplicationJsonObject?: GetGifById200ApplicationJson;
}
