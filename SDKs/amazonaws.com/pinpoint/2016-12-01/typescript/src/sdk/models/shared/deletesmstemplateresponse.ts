import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageBody } from "./messagebody";



export class DeleteSmsTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MessageBody" })
  messageBody: MessageBody;
}
