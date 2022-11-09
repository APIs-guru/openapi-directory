import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VpcConfig } from "./vpcconfig";


// AutoMlSecurityConfig
/** 
 * Security options.
**/
export class AutoMlSecurityConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=EnableInterContainerTrafficEncryption" })
  enableInterContainerTrafficEncryption?: boolean;

  @Metadata({ data: "json, name=VolumeKmsKeyId" })
  volumeKmsKeyId?: string;

  @Metadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}
