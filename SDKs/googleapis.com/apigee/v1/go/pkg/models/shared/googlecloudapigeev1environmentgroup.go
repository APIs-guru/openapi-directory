package shared

type GoogleCloudApigeeV1EnvironmentGroupStateEnum string

const (
	GoogleCloudApigeeV1EnvironmentGroupStateEnumStateUnspecified GoogleCloudApigeeV1EnvironmentGroupStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudApigeeV1EnvironmentGroupStateEnumCreating         GoogleCloudApigeeV1EnvironmentGroupStateEnum = "CREATING"
	GoogleCloudApigeeV1EnvironmentGroupStateEnumActive           GoogleCloudApigeeV1EnvironmentGroupStateEnum = "ACTIVE"
	GoogleCloudApigeeV1EnvironmentGroupStateEnumDeleting         GoogleCloudApigeeV1EnvironmentGroupStateEnum = "DELETING"
	GoogleCloudApigeeV1EnvironmentGroupStateEnumUpdating         GoogleCloudApigeeV1EnvironmentGroupStateEnum = "UPDATING"
)

// GoogleCloudApigeeV1EnvironmentGroup
// EnvironmentGroup configuration. An environment group is used to group one or more Apigee environments under a single host name.
type GoogleCloudApigeeV1EnvironmentGroup struct {
	CreatedAt      *string                                       `json:"createdAt,omitempty"`
	Hostnames      []string                                      `json:"hostnames,omitempty"`
	LastModifiedAt *string                                       `json:"lastModifiedAt,omitempty"`
	Name           *string                                       `json:"name,omitempty"`
	State          *GoogleCloudApigeeV1EnvironmentGroupStateEnum `json:"state,omitempty"`
}

// GoogleCloudApigeeV1EnvironmentGroupInput
// EnvironmentGroup configuration. An environment group is used to group one or more Apigee environments under a single host name.
type GoogleCloudApigeeV1EnvironmentGroupInput struct {
	Hostnames []string `json:"hostnames,omitempty"`
	Name      *string  `json:"name,omitempty"`
}
