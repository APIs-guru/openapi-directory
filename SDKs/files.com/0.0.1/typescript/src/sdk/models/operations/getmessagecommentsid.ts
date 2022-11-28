import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMessageCommentsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetMessageCommentsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMessageCommentsIdPathParams;
}


export class GetMessageCommentsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageCommentEntity?: shared.MessageCommentEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
