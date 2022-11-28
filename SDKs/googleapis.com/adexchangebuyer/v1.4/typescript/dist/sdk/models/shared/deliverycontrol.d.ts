import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryControlFrequencyCap } from "./deliverycontrolfrequencycap";
export declare class DeliveryControl extends SpeakeasyBase {
    creativeBlockingLevel?: string;
    deliveryRateType?: string;
    frequencyCaps?: DeliveryControlFrequencyCap[];
}
