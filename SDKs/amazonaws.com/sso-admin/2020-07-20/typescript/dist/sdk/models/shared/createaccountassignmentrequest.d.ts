import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PrincipalTypeEnum } from "./principaltypeenum";
import { TargetTypeEnum } from "./targettypeenum";
export declare class CreateAccountAssignmentRequest extends SpeakeasyBase {
    instanceArn: string;
    permissionSetArn: string;
    principalId: string;
    principalType: PrincipalTypeEnum;
    targetId: string;
    targetType: TargetTypeEnum;
}
