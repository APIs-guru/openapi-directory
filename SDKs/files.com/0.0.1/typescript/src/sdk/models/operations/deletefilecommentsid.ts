import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteFileCommentsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteFileCommentsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteFileCommentsIdPathParams;
}


export class DeleteFileCommentsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
