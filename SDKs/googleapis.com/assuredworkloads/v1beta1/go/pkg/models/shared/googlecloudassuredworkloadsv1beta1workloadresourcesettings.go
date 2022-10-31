package shared

type GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettingsResourceTypeEnum string

const (
	GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettingsResourceTypeEnumResourceTypeUnspecified GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettingsResourceTypeEnum = "RESOURCE_TYPE_UNSPECIFIED"
	GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettingsResourceTypeEnumConsumerProject         GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettingsResourceTypeEnum = "CONSUMER_PROJECT"
	GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettingsResourceTypeEnumConsumerFolder          GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettingsResourceTypeEnum = "CONSUMER_FOLDER"
	GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettingsResourceTypeEnumEncryptionKeysProject   GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettingsResourceTypeEnum = "ENCRYPTION_KEYS_PROJECT"
	GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettingsResourceTypeEnumKeyring                 GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettingsResourceTypeEnum = "KEYRING"
)

type GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings struct {
	DisplayName  *string                                                                     `json:"displayName,omitempty"`
	ResourceID   *string                                                                     `json:"resourceId,omitempty"`
	ResourceType *GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettingsResourceTypeEnum `json:"resourceType,omitempty"`
}
