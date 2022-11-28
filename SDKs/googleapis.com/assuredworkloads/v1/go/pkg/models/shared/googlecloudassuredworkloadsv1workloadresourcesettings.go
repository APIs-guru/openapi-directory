package shared

type GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnum string

const (
	GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnumResourceTypeUnspecified GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnum = "RESOURCE_TYPE_UNSPECIFIED"
	GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnumConsumerProject         GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnum = "CONSUMER_PROJECT"
	GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnumConsumerFolder          GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnum = "CONSUMER_FOLDER"
	GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnumEncryptionKeysProject   GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnum = "ENCRYPTION_KEYS_PROJECT"
	GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnumKeyring                 GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnum = "KEYRING"
)

// GoogleCloudAssuredworkloadsV1WorkloadResourceSettings
// Represent the custom settings for the resources to be created.
type GoogleCloudAssuredworkloadsV1WorkloadResourceSettings struct {
	DisplayName  *string                                                                `json:"displayName,omitempty"`
	ResourceID   *string                                                                `json:"resourceId,omitempty"`
	ResourceType *GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnum `json:"resourceType,omitempty"`
}
