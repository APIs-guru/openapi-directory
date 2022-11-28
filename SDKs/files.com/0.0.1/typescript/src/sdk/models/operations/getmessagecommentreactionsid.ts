import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMessageCommentReactionsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetMessageCommentReactionsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMessageCommentReactionsIdPathParams;
}


export class GetMessageCommentReactionsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageCommentReactionEntity?: shared.MessageCommentReactionEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
