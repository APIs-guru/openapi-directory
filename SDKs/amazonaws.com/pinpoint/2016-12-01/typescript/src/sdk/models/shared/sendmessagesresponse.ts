import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageResponse } from "./messageresponse";



export class SendMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MessageResponse" })
  messageResponse: MessageResponse;
}
