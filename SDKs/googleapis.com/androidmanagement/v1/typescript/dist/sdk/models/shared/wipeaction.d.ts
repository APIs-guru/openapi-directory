import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An action to reset a company owned device or delete a work profile. Note: blockAction must also be specified.
**/
export declare class WipeAction extends SpeakeasyBase {
    preserveFrp?: boolean;
    wipeAfterDays?: number;
}
