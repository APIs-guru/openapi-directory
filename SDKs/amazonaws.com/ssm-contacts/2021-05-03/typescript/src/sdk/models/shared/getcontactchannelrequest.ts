import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetContactChannelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactChannelId" })
  contactChannelId: string;
}
