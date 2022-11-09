import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContactChannelAddress } from "./contactchanneladdress";


export class UpdateContactChannelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactChannelId" })
  contactChannelId: string;

  @Metadata({ data: "json, name=DeliveryAddress" })
  deliveryAddress?: ContactChannelAddress;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
