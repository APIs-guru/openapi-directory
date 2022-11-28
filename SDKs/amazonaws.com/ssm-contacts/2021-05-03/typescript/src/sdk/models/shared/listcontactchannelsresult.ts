import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactChannel } from "./contactchannel";



export class ListContactChannelsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactChannels", elemType: ContactChannel })
  contactChannels: ContactChannel[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
