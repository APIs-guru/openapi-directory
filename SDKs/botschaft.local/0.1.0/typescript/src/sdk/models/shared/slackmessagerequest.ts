import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SlackMessageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=base64_message" })
  base64Message?: string;

  @Metadata({ data: "json, name=channel" })
  channel: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
