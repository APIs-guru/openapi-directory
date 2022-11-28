import { SpeakeasyBase } from "../../../internal/utils";
import { StudioEncryptionConfigurationKeyTypeEnum } from "./studioencryptionconfigurationkeytypeenum";
/**
 * Configuration of the encryption method that is used for the studio.
**/
export declare class StudioEncryptionConfiguration extends SpeakeasyBase {
    keyArn?: string;
    keyType: StudioEncryptionConfigurationKeyTypeEnum;
}
