import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteMessageReactionsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteMessageReactionsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteMessageReactionsIdPathParams;
}


export class DeleteMessageReactionsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
