import { SpeakeasyBase } from "../../../internal/utils";
import { PrincipalTypeEnum } from "./principaltypeenum";
import { TargetTypeEnum } from "./targettypeenum";
export declare class DeleteAccountAssignmentRequest extends SpeakeasyBase {
    instanceArn: string;
    permissionSetArn: string;
    principalId: string;
    principalType: PrincipalTypeEnum;
    targetId: string;
    targetType: TargetTypeEnum;
}
