import { SpeakeasyBase } from "../../../internal/utils";
import { VpcConfig } from "./vpcconfig";
/**
 * Security options.
**/
export declare class AutoMlSecurityConfig extends SpeakeasyBase {
    enableInterContainerTrafficEncryption?: boolean;
    volumeKmsKeyId?: string;
    vpcConfig?: VpcConfig;
}
