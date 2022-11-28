import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageBody } from "./messagebody";



export class DeleteEmailTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MessageBody" })
  messageBody: MessageBody;
}
