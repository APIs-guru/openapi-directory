import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object representing a Bonus payment paid to a Worker.
**/
export declare class BonusPayment extends SpeakeasyBase {
    assignmentId?: string;
    bonusAmount?: string;
    grantTime?: Date;
    reason?: string;
    workerId?: string;
}
