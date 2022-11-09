import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMessageCommentsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetMessageCommentsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMessageCommentsIdPathParams;
}


export class GetMessageCommentsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  messageCommentEntity?: shared.MessageCommentEntity;

  @Metadata()
  statusCode: number;
}
