import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActivationStatusEnum } from "./activationstatusenum";
import { ContactChannelAddress } from "./contactchanneladdress";
import { ChannelTypeEnum } from "./channeltypeenum";


// ContactChannel
/** 
 * The method that Incident Manager uses to engage a contact.
**/
export class ContactChannel extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActivationStatus" })
  activationStatus: ActivationStatusEnum;

  @Metadata({ data: "json, name=ContactArn" })
  contactArn: string;

  @Metadata({ data: "json, name=ContactChannelArn" })
  contactChannelArn: string;

  @Metadata({ data: "json, name=DeliveryAddress" })
  deliveryAddress: ContactChannelAddress;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Type" })
  type?: ChannelTypeEnum;
}
