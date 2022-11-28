import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMessageReactionsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetMessageReactionsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMessageReactionsIdPathParams;
}


export class GetMessageReactionsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageReactionEntity?: shared.MessageReactionEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
