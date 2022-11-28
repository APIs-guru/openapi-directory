import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryOptions } from "./deliveryoptions";
import { ReputationOptions } from "./reputationoptions";
import { SendingOptions } from "./sendingoptions";
import { Tag } from "./tag";
import { TrackingOptions } from "./trackingoptions";
/**
 * Information about a configuration set.
**/
export declare class GetConfigurationSetResponse extends SpeakeasyBase {
    configurationSetName?: string;
    deliveryOptions?: DeliveryOptions;
    reputationOptions?: ReputationOptions;
    sendingOptions?: SendingOptions;
    tags?: Tag[];
    trackingOptions?: TrackingOptions;
}
