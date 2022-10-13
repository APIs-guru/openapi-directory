package shared

type GoogleCloudApigeeV1InstancePeeringCidrRangeEnum string

const (
	GoogleCloudApigeeV1InstancePeeringCidrRangeEnumCidrRangeUnspecified GoogleCloudApigeeV1InstancePeeringCidrRangeEnum = "CIDR_RANGE_UNSPECIFIED"
	GoogleCloudApigeeV1InstancePeeringCidrRangeEnumSlash16              GoogleCloudApigeeV1InstancePeeringCidrRangeEnum = "SLASH_16"
	GoogleCloudApigeeV1InstancePeeringCidrRangeEnumSlash17              GoogleCloudApigeeV1InstancePeeringCidrRangeEnum = "SLASH_17"
	GoogleCloudApigeeV1InstancePeeringCidrRangeEnumSlash18              GoogleCloudApigeeV1InstancePeeringCidrRangeEnum = "SLASH_18"
	GoogleCloudApigeeV1InstancePeeringCidrRangeEnumSlash19              GoogleCloudApigeeV1InstancePeeringCidrRangeEnum = "SLASH_19"
	GoogleCloudApigeeV1InstancePeeringCidrRangeEnumSlash20              GoogleCloudApigeeV1InstancePeeringCidrRangeEnum = "SLASH_20"
	GoogleCloudApigeeV1InstancePeeringCidrRangeEnumSlash22              GoogleCloudApigeeV1InstancePeeringCidrRangeEnum = "SLASH_22"
	GoogleCloudApigeeV1InstancePeeringCidrRangeEnumSlash23              GoogleCloudApigeeV1InstancePeeringCidrRangeEnum = "SLASH_23"
)

type GoogleCloudApigeeV1InstanceStateEnum string

const (
	GoogleCloudApigeeV1InstanceStateEnumStateUnspecified GoogleCloudApigeeV1InstanceStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudApigeeV1InstanceStateEnumCreating         GoogleCloudApigeeV1InstanceStateEnum = "CREATING"
	GoogleCloudApigeeV1InstanceStateEnumActive           GoogleCloudApigeeV1InstanceStateEnum = "ACTIVE"
	GoogleCloudApigeeV1InstanceStateEnumDeleting         GoogleCloudApigeeV1InstanceStateEnum = "DELETING"
	GoogleCloudApigeeV1InstanceStateEnumUpdating         GoogleCloudApigeeV1InstanceStateEnum = "UPDATING"
)

type GoogleCloudApigeeV1Instance struct {
	ConsumerAcceptList    []string                                         `json:"consumerAcceptList"`
	CreatedAt             *string                                          `json:"createdAt"`
	Description           *string                                          `json:"description"`
	DiskEncryptionKeyName *string                                          `json:"diskEncryptionKeyName"`
	DisplayName           *string                                          `json:"displayName"`
	Host                  *string                                          `json:"host"`
	IPRange               *string                                          `json:"ipRange"`
	LastModifiedAt        *string                                          `json:"lastModifiedAt"`
	Location              *string                                          `json:"location"`
	Name                  *string                                          `json:"name"`
	PeeringCidrRange      *GoogleCloudApigeeV1InstancePeeringCidrRangeEnum `json:"peeringCidrRange"`
	Port                  *string                                          `json:"port"`
	RuntimeVersion        *string                                          `json:"runtimeVersion"`
	ServiceAttachment     *string                                          `json:"serviceAttachment"`
	State                 *GoogleCloudApigeeV1InstanceStateEnum            `json:"state"`
}
