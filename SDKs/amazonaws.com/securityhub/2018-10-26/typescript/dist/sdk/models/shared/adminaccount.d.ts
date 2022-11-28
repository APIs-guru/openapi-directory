import { SpeakeasyBase } from "../../../internal/utils";
import { AdminStatusEnum } from "./adminstatusenum";
/**
 * Represents a Security Hub administrator account designated by an organization management account.
**/
export declare class AdminAccount extends SpeakeasyBase {
    accountId?: string;
    status?: AdminStatusEnum;
}
