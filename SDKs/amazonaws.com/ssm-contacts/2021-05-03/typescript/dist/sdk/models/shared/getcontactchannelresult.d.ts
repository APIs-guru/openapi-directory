import { SpeakeasyBase } from "../../../internal/utils";
import { ActivationStatusEnum } from "./activationstatusenum";
import { ContactChannelAddress } from "./contactchanneladdress";
import { ChannelTypeEnum } from "./channeltypeenum";
export declare class GetContactChannelResult extends SpeakeasyBase {
    activationStatus?: ActivationStatusEnum;
    contactArn: string;
    contactChannelArn: string;
    deliveryAddress: ContactChannelAddress;
    name: string;
    type: ChannelTypeEnum;
}
