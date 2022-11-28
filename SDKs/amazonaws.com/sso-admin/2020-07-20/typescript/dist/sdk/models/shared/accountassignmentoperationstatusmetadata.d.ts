import { SpeakeasyBase } from "../../../internal/utils";
import { StatusValuesEnum } from "./statusvaluesenum";
/**
 * Provides information about the <a>AccountAssignment</a> creation request.
**/
export declare class AccountAssignmentOperationStatusMetadata extends SpeakeasyBase {
    createdDate?: Date;
    requestId?: string;
    status?: StatusValuesEnum;
}
