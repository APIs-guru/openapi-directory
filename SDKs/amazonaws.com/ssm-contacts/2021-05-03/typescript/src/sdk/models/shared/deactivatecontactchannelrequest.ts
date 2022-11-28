import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeactivateContactChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactChannelId" })
  contactChannelId: string;
}
