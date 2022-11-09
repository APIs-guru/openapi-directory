import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnum {
    ResourceTypeUnspecified = "RESOURCE_TYPE_UNSPECIFIED"
,    ConsumerProject = "CONSUMER_PROJECT"
,    ConsumerFolder = "CONSUMER_FOLDER"
,    EncryptionKeysProject = "ENCRYPTION_KEYS_PROJECT"
,    Keyring = "KEYRING"
}


// GoogleCloudAssuredworkloadsV1WorkloadResourceSettings
/** 
 * Represent the custom settings for the resources to be created.
**/
export class GoogleCloudAssuredworkloadsV1WorkloadResourceSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnum;
}
