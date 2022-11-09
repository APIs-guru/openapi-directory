import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV3BoardsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BoardInfo;
}


export class PostV3BoardsResponse extends SpeakeasyBase {
  @Metadata()
  boardCreated?: shared.BoardCreated;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
