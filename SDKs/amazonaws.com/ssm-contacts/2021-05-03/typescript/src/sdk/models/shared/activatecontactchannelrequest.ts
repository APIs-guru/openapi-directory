import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActivateContactChannelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActivationCode" })
  activationCode: string;

  @Metadata({ data: "json, name=ContactChannelId" })
  contactChannelId: string;
}
