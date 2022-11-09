import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMessageCommentReactionsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetMessageCommentReactionsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMessageCommentReactionsIdPathParams;
}


export class GetMessageCommentReactionsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  messageCommentReactionEntity?: shared.MessageCommentReactionEntity;

  @Metadata()
  statusCode: number;
}
