import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TwilioMessageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=base64_message" })
  base64Message?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=to" })
  to: string;
}
