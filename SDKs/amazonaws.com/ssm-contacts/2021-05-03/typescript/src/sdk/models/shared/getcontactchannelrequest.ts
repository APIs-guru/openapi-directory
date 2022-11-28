import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContactChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactChannelId" })
  contactChannelId: string;
}
