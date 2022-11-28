import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetPermissionRequest extends SpeakeasyBase {
    allowSsh?: boolean;
    allowSudo?: boolean;
    iamUserArn: string;
    level?: string;
    stackId: string;
}
