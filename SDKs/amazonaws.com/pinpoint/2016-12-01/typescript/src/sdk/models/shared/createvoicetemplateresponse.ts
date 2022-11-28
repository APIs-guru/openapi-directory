import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateTemplateMessageBody } from "./createtemplatemessagebody";



export class CreateVoiceTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateTemplateMessageBody" })
  createTemplateMessageBody: CreateTemplateMessageBody;
}
