import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageBody } from "./messagebody";



export class DeleteVoiceTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MessageBody" })
  messageBody: MessageBody;
}
