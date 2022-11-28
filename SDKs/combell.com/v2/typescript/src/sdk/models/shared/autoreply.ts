import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AutoReply extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;
}
