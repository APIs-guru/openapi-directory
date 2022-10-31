package shared

type GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfoResourceTypeEnum string

const (
	GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfoResourceTypeEnumResourceTypeUnspecified GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfoResourceTypeEnum = "RESOURCE_TYPE_UNSPECIFIED"
	GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfoResourceTypeEnumConsumerProject         GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfoResourceTypeEnum = "CONSUMER_PROJECT"
	GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfoResourceTypeEnumConsumerFolder          GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfoResourceTypeEnum = "CONSUMER_FOLDER"
	GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfoResourceTypeEnumEncryptionKeysProject   GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfoResourceTypeEnum = "ENCRYPTION_KEYS_PROJECT"
	GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfoResourceTypeEnumKeyring                 GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfoResourceTypeEnum = "KEYRING"
)

type GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo struct {
	ResourceID   *string                                                                 `json:"resourceId,omitempty"`
	ResourceType *GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfoResourceTypeEnum `json:"resourceType,omitempty"`
}
