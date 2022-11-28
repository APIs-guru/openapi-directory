import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryOptions } from "./deliveryoptions";
import { ReputationOptions } from "./reputationoptions";
import { SendingOptions } from "./sendingoptions";
import { SuppressionOptions } from "./suppressionoptions";
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
    suppressionOptions?: SuppressionOptions;
    tags?: Tag[];
    trackingOptions?: TrackingOptions;
}
