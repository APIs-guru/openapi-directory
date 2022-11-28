import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcConfig } from "./vpcconfig";



// AutoMlSecurityConfig
/** 
 * Security options.
**/
export class AutoMlSecurityConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EnableInterContainerTrafficEncryption" })
  enableInterContainerTrafficEncryption?: boolean;

  @SpeakeasyMetadata({ data: "json, name=VolumeKmsKeyId" })
  volumeKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}
