import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StudioEncryptionConfigurationKeyTypeEnum } from "./studioencryptionconfigurationkeytypeenum";


// StudioEncryptionConfiguration
/** 
 * Configuration of the encryption method that is used for the studio.
**/
export class StudioEncryptionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyArn" })
  keyArn?: string;

  @Metadata({ data: "json, name=keyType" })
  keyType: StudioEncryptionConfigurationKeyTypeEnum;
}
