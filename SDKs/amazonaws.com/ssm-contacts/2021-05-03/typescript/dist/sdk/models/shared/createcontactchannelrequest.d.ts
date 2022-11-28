import { SpeakeasyBase } from "../../../internal/utils";
import { ContactChannelAddress } from "./contactchanneladdress";
import { ChannelTypeEnum } from "./channeltypeenum";
export declare class CreateContactChannelRequest extends SpeakeasyBase {
    contactId: string;
    deferActivation?: boolean;
    deliveryAddress: ContactChannelAddress;
    idempotencyToken?: string;
    name: string;
    type: ChannelTypeEnum;
}
