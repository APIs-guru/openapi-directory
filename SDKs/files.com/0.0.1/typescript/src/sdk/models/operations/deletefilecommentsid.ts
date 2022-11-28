import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteFileCommentsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteFileCommentsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteFileCommentsIdPathParams;
}


export class DeleteFileCommentsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
