import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateUserProfileRequest extends SpeakeasyBase {
    allowSelfManagement?: boolean;
    iamUserArn: string;
    sshPublicKey?: string;
    sshUsername?: string;
}
