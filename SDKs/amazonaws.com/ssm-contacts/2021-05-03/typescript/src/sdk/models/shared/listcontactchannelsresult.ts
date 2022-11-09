import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContactChannel } from "./contactchannel";


export class ListContactChannelsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactChannels", elemType: shared.ContactChannel })
  contactChannels: ContactChannel[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
