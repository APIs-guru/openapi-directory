import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettingsResourceTypeEnum {
    ResourceTypeUnspecified = "RESOURCE_TYPE_UNSPECIFIED",
    ConsumerProject = "CONSUMER_PROJECT",
    ConsumerFolder = "CONSUMER_FOLDER",
    EncryptionKeysProject = "ENCRYPTION_KEYS_PROJECT",
    Keyring = "KEYRING"
}
/**
 * Represent the custom settings for the resources to be created.
**/
export declare class GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings extends SpeakeasyBase {
    displayName?: string;
    resourceId?: string;
    resourceType?: GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettingsResourceTypeEnum;
}
