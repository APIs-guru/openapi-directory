import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteMessagesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteMessagesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteMessagesIdPathParams;
}


export class DeleteMessagesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
