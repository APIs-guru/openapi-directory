import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeactivateContactChannelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactChannelId" })
  contactChannelId: string;
}
