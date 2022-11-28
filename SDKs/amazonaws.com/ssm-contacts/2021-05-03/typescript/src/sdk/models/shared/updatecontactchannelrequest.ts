import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactChannelAddress } from "./contactchanneladdress";



export class UpdateContactChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactChannelId" })
  contactChannelId: string;

  @SpeakeasyMetadata({ data: "json, name=DeliveryAddress" })
  deliveryAddress?: ContactChannelAddress;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
