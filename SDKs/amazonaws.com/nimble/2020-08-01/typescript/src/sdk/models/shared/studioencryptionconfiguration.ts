import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StudioEncryptionConfigurationKeyTypeEnum } from "./studioencryptionconfigurationkeytypeenum";



// StudioEncryptionConfiguration
/** 
 * Configuration of the encryption method that is used for the studio.
**/
export class StudioEncryptionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyArn" })
  keyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=keyType" })
  keyType: StudioEncryptionConfigurationKeyTypeEnum;
}
