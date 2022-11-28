import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGifByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=gifId" })
  gifId: number;
}


export class GetGifById200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.Gif;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: shared.Meta;
}


export class GetGifByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGifByIdPathParams;
}


export class GetGifByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getGifById200ApplicationJsonObject?: GetGifById200ApplicationJson;
}
