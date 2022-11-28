import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteContactChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactChannelId" })
  contactChannelId: string;
}
