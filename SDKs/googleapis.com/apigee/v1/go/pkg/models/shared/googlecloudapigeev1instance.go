package shared




type GoogleCloudApigeeV1InstancePeeringCidrRangeEnum string

const (
    GoogleCloudApigeeV1InstancePeeringCidrRangeEnumCidrRangeUnspecified GoogleCloudApigeeV1InstancePeeringCidrRangeEnum = "CIDR_RANGE_UNSPECIFIED"
GoogleCloudApigeeV1InstancePeeringCidrRangeEnumSlash16 GoogleCloudApigeeV1InstancePeeringCidrRangeEnum = "SLASH_16"
GoogleCloudApigeeV1InstancePeeringCidrRangeEnumSlash17 GoogleCloudApigeeV1InstancePeeringCidrRangeEnum = "SLASH_17"
GoogleCloudApigeeV1InstancePeeringCidrRangeEnumSlash18 GoogleCloudApigeeV1InstancePeeringCidrRangeEnum = "SLASH_18"
GoogleCloudApigeeV1InstancePeeringCidrRangeEnumSlash19 GoogleCloudApigeeV1InstancePeeringCidrRangeEnum = "SLASH_19"
GoogleCloudApigeeV1InstancePeeringCidrRangeEnumSlash20 GoogleCloudApigeeV1InstancePeeringCidrRangeEnum = "SLASH_20"
GoogleCloudApigeeV1InstancePeeringCidrRangeEnumSlash22 GoogleCloudApigeeV1InstancePeeringCidrRangeEnum = "SLASH_22"
GoogleCloudApigeeV1InstancePeeringCidrRangeEnumSlash23 GoogleCloudApigeeV1InstancePeeringCidrRangeEnum = "SLASH_23"
)



type GoogleCloudApigeeV1InstanceStateEnum string

const (
    GoogleCloudApigeeV1InstanceStateEnumStateUnspecified GoogleCloudApigeeV1InstanceStateEnum = "STATE_UNSPECIFIED"
GoogleCloudApigeeV1InstanceStateEnumCreating GoogleCloudApigeeV1InstanceStateEnum = "CREATING"
GoogleCloudApigeeV1InstanceStateEnumActive GoogleCloudApigeeV1InstanceStateEnum = "ACTIVE"
GoogleCloudApigeeV1InstanceStateEnumDeleting GoogleCloudApigeeV1InstanceStateEnum = "DELETING"
GoogleCloudApigeeV1InstanceStateEnumUpdating GoogleCloudApigeeV1InstanceStateEnum = "UPDATING"
)


type GoogleCloudApigeeV1Instance struct {
    ConsumerAcceptList []string `json:"consumerAcceptList,omitempty"`
    CreatedAt *string `json:"createdAt,omitempty"`
    Description *string `json:"description,omitempty"`
    DiskEncryptionKeyName *string `json:"diskEncryptionKeyName,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Host *string `json:"host,omitempty"`
    IPRange *string `json:"ipRange,omitempty"`
    LastModifiedAt *string `json:"lastModifiedAt,omitempty"`
    Location *string `json:"location,omitempty"`
    Name *string `json:"name,omitempty"`
    PeeringCidrRange *GoogleCloudApigeeV1InstancePeeringCidrRangeEnum `json:"peeringCidrRange,omitempty"`
    Port *string `json:"port,omitempty"`
    RuntimeVersion *string `json:"runtimeVersion,omitempty"`
    ServiceAttachment *string `json:"serviceAttachment,omitempty"`
    State *GoogleCloudApigeeV1InstanceStateEnum `json:"state,omitempty"`
    
}

