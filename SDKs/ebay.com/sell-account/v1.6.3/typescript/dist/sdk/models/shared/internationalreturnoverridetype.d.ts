import { SpeakeasyBase } from "../../../internal/utils";
import { TimeDuration } from "./timeduration";
/**
 * This type defines the fields for a seller's international return policy. If a seller does not populate the fields in this complex type, the international return policy defaults to the return policy set for domestic returns.
**/
export declare class InternationalReturnOverrideType extends SpeakeasyBase {
    returnMethod?: string;
    returnPeriod?: TimeDuration;
    returnShippingCostPayer?: string;
    returnsAccepted?: boolean;
}
