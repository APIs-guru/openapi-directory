import { SpeakeasyBase } from "../../../internal/utils";
import { ActivationStatusEnum } from "./activationstatusenum";
import { ContactChannelAddress } from "./contactchanneladdress";
import { ChannelTypeEnum } from "./channeltypeenum";
/**
 * The method that Incident Manager uses to engage a contact.
**/
export declare class ContactChannel extends SpeakeasyBase {
    activationStatus: ActivationStatusEnum;
    contactArn: string;
    contactChannelArn: string;
    deliveryAddress: ContactChannelAddress;
    name: string;
    type?: ChannelTypeEnum;
}
