import { SpeakeasyBase } from "../../../internal/utils";
import { PrincipalTypeEnum } from "./principaltypeenum";
import { StatusValuesEnum } from "./statusvaluesenum";
import { TargetTypeEnum } from "./targettypeenum";
/**
 * The status of the creation or deletion operation of an assignment that a principal needs to access an account.
**/
export declare class AccountAssignmentOperationStatus extends SpeakeasyBase {
    createdDate?: Date;
    failureReason?: string;
    permissionSetArn?: string;
    principalId?: string;
    principalType?: PrincipalTypeEnum;
    requestId?: string;
    status?: StatusValuesEnum;
    targetId?: string;
    targetType?: TargetTypeEnum;
}
