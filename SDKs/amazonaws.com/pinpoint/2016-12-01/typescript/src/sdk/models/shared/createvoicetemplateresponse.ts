import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreateTemplateMessageBody } from "./createtemplatemessagebody";


export class CreateVoiceTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreateTemplateMessageBody" })
  createTemplateMessageBody: CreateTemplateMessageBody;
}
