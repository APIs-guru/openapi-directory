import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings specific to the Key Management Service. This message is deprecated. In order to create a Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field.
**/
export declare class GoogleCloudAssuredworkloadsV1WorkloadKmsSettings extends SpeakeasyBase {
    nextRotationTime?: string;
    rotationPeriod?: string;
}
