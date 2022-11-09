import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteMessageCommentsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteMessageCommentsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteMessageCommentsIdPathParams;
}


export class DeleteMessageCommentsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
