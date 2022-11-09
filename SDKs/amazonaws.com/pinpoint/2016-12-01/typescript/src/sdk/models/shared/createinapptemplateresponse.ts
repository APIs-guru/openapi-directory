import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TemplateCreateMessageBody } from "./templatecreatemessagebody";


export class CreateInAppTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TemplateCreateMessageBody" })
  templateCreateMessageBody: TemplateCreateMessageBody;
}
