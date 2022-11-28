import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteMessagesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteMessagesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteMessagesIdPathParams;
}


export class DeleteMessagesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
