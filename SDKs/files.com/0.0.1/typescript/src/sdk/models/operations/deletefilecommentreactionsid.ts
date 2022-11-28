import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteFileCommentReactionsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteFileCommentReactionsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteFileCommentReactionsIdPathParams;
}


export class DeleteFileCommentReactionsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
