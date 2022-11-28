import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteMessageCommentsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteMessageCommentsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteMessageCommentsIdPathParams;
}


export class DeleteMessageCommentsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
