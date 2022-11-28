import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV3BoardsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BoardInfo;
}


export class PostV3BoardsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  boardCreated?: shared.BoardCreated;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
