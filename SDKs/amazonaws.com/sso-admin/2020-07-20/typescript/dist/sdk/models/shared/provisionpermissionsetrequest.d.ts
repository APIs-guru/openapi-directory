import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisionTargetTypeEnum } from "./provisiontargettypeenum";
export declare class ProvisionPermissionSetRequest extends SpeakeasyBase {
    instanceArn: string;
    permissionSetArn: string;
    targetId?: string;
    targetType: ProvisionTargetTypeEnum;
}
