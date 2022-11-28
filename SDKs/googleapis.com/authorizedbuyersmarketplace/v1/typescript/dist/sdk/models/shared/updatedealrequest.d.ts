import { SpeakeasyBase } from "../../../internal/utils";
import { DealInput } from "./deal";
/**
 * Request message for updating the deal at the given revision number.
**/
export declare class UpdateDealRequestInput extends SpeakeasyBase {
    deal?: DealInput;
    updateMask?: string;
}
