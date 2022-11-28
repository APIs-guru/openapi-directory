import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes stack or user permissions.
**/
export declare class Permission extends SpeakeasyBase {
    allowSsh?: boolean;
    allowSudo?: boolean;
    iamUserArn?: string;
    level?: string;
    stackId?: string;
}
