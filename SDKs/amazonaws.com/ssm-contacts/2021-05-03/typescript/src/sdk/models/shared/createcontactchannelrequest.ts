import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContactChannelAddress } from "./contactchanneladdress";
import { ChannelTypeEnum } from "./channeltypeenum";


export class CreateContactChannelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactId" })
  contactId: string;

  @Metadata({ data: "json, name=DeferActivation" })
  deferActivation?: boolean;

  @Metadata({ data: "json, name=DeliveryAddress" })
  deliveryAddress: ContactChannelAddress;

  @Metadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Type" })
  type: ChannelTypeEnum;
}
