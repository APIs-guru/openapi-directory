import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateUserProfileRequest extends SpeakeasyBase {
    allowSelfManagement?: boolean;
    iamUserArn: string;
    sshPublicKey?: string;
    sshUsername?: string;
}
