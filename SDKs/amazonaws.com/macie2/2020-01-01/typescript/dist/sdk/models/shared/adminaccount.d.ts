import { SpeakeasyBase } from "../../../internal/utils";
import { AdminStatusEnum } from "./adminstatusenum";
/**
 * Provides information about the delegated Amazon Macie administrator account for an Amazon Web Services organization.
**/
export declare class AdminAccount extends SpeakeasyBase {
    accountId?: string;
    status?: AdminStatusEnum;
}
