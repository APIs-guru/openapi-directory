import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActivateContactChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActivationCode" })
  activationCode: string;

  @SpeakeasyMetadata({ data: "json, name=ContactChannelId" })
  contactChannelId: string;
}
