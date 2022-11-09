import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GoogleCloudAssuredworkloadsV1WorkloadResourceInfoResourceTypeEnum {
    ResourceTypeUnspecified = "RESOURCE_TYPE_UNSPECIFIED",
    ConsumerProject = "CONSUMER_PROJECT",
    ConsumerFolder = "CONSUMER_FOLDER",
    EncryptionKeysProject = "ENCRYPTION_KEYS_PROJECT",
    Keyring = "KEYRING"
}
/**
 * Represent the resources that are children of this Workload.
**/
export declare class GoogleCloudAssuredworkloadsV1WorkloadResourceInfo extends SpeakeasyBase {
    resourceId?: string;
    resourceType?: GoogleCloudAssuredworkloadsV1WorkloadResourceInfoResourceTypeEnum;
}
