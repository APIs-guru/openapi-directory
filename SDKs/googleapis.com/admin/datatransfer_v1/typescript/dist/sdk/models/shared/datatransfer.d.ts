import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationDataTransfer } from "./applicationdatatransfer";
/**
 * A Transfer resource represents the transfer of the ownership of user data between users.
**/
export declare class DataTransfer extends SpeakeasyBase {
    applicationDataTransfers?: ApplicationDataTransfer[];
    etag?: string;
    id?: string;
    kind?: string;
    newOwnerUserId?: string;
    oldOwnerUserId?: string;
    overallTransferStatusCode?: string;
    requestTime?: Date;
}
