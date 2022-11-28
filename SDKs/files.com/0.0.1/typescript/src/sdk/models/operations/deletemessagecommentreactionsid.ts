import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteMessageCommentReactionsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteMessageCommentReactionsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteMessageCommentReactionsIdPathParams;
}


export class DeleteMessageCommentReactionsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
