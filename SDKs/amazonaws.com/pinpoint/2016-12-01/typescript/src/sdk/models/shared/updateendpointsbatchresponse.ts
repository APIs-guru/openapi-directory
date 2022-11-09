import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MessageBody } from "./messagebody";


export class UpdateEndpointsBatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MessageBody" })
  messageBody: MessageBody;
}
