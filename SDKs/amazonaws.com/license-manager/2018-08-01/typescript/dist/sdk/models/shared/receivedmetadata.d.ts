import { SpeakeasyBase } from "../../../internal/utils";
import { AllowedOperationEnum } from "./allowedoperationenum";
import { ReceivedStatusEnum } from "./receivedstatusenum";
/**
 * Metadata associated with received licenses and grants.
**/
export declare class ReceivedMetadata extends SpeakeasyBase {
    allowedOperations?: AllowedOperationEnum[];
    receivedStatus?: ReceivedStatusEnum;
    receivedStatusReason?: string;
}
