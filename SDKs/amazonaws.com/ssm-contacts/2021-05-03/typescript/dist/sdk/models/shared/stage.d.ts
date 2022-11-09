import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Target } from "./target";
/**
 * A set amount of time that an escalation plan or engagement plan engages the specified contacts or contact methods.
**/
export declare class Stage extends SpeakeasyBase {
    durationInMinutes: number;
    targets: Target[];
}
