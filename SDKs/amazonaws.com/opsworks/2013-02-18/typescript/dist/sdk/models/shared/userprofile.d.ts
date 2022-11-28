import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a user's SSH information.
**/
export declare class UserProfile extends SpeakeasyBase {
    allowSelfManagement?: boolean;
    iamUserArn?: string;
    name?: string;
    sshPublicKey?: string;
    sshUsername?: string;
}
