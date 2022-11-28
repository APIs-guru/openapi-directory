import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactChannelAddress } from "./contactchanneladdress";
import { ChannelTypeEnum } from "./channeltypeenum";



export class CreateContactChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactId" })
  contactId: string;

  @SpeakeasyMetadata({ data: "json, name=DeferActivation" })
  deferActivation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DeliveryAddress" })
  deliveryAddress: ContactChannelAddress;

  @SpeakeasyMetadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: ChannelTypeEnum;
}
