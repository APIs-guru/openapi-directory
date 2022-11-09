import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdatePermissionSetRequest extends SpeakeasyBase {
    description?: string;
    instanceArn: string;
    permissionSetArn: string;
    relayState?: string;
    sessionDuration?: string;
}
