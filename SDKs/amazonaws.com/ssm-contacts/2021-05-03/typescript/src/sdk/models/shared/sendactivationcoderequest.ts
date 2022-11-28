import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SendActivationCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactChannelId" })
  contactChannelId: string;
}
