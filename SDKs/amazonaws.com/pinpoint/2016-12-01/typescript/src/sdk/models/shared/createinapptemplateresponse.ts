import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TemplateCreateMessageBody } from "./templatecreatemessagebody";



export class CreateInAppTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TemplateCreateMessageBody" })
  templateCreateMessageBody: TemplateCreateMessageBody;
}
