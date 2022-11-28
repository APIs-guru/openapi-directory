import { SpeakeasyBase } from "../../../internal/utils";
export declare enum KeyTypeEnum {
    DeployKey = "deploy-key",
    GithubUserKey = "github-user-key"
}
export declare class Key extends SpeakeasyBase {
    fingerprint?: string;
    preferred?: boolean;
    publicKey?: string;
    time?: Date;
    type?: KeyTypeEnum;
}
