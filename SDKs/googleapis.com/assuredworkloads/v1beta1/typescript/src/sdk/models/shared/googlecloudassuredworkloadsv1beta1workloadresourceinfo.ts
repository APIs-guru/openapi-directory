import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfoResourceTypeEnum {
    ResourceTypeUnspecified = "RESOURCE_TYPE_UNSPECIFIED"
,    ConsumerProject = "CONSUMER_PROJECT"
,    ConsumerFolder = "CONSUMER_FOLDER"
,    EncryptionKeysProject = "ENCRYPTION_KEYS_PROJECT"
,    Keyring = "KEYRING"
}


// GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo
/** 
 * Represent the resources that are children of this Workload.
**/
export class GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfoResourceTypeEnum;
}
