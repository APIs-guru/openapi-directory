import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AutoReply extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=subject" })
  subject?: string;
}
