import { SpeakeasyBase } from "../../../internal/utils";
import { ContactChannelAddress } from "./contactchanneladdress";
export declare class UpdateContactChannelRequest extends SpeakeasyBase {
    contactChannelId: string;
    deliveryAddress?: ContactChannelAddress;
    name?: string;
}
