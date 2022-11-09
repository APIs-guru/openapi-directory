import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MessageBody } from "./messagebody";


export class UpdateInAppTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MessageBody" })
  messageBody: MessageBody;
}
