import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TimingInformation } from "./timinginformation";
/**
 * Contains the details of the started session.
**/
export declare class StartSessionResult extends SpeakeasyBase {
    sessionToken?: string;
    timingInformation?: TimingInformation;
}
