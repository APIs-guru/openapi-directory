import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MessageResponse } from "./messageresponse";


export class SendMessagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MessageResponse" })
  messageResponse: MessageResponse;
}
