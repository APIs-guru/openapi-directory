package shared




type GoogleCloudApigeeV1EnvironmentGroupStateEnum string

const (
    GoogleCloudApigeeV1EnvironmentGroupStateEnumStateUnspecified GoogleCloudApigeeV1EnvironmentGroupStateEnum = "STATE_UNSPECIFIED"
GoogleCloudApigeeV1EnvironmentGroupStateEnumCreating GoogleCloudApigeeV1EnvironmentGroupStateEnum = "CREATING"
GoogleCloudApigeeV1EnvironmentGroupStateEnumActive GoogleCloudApigeeV1EnvironmentGroupStateEnum = "ACTIVE"
GoogleCloudApigeeV1EnvironmentGroupStateEnumDeleting GoogleCloudApigeeV1EnvironmentGroupStateEnum = "DELETING"
GoogleCloudApigeeV1EnvironmentGroupStateEnumUpdating GoogleCloudApigeeV1EnvironmentGroupStateEnum = "UPDATING"
)


type GoogleCloudApigeeV1EnvironmentGroup struct {
    CreatedAt *string `json:"createdAt,omitempty"`
    Hostnames []string `json:"hostnames,omitempty"`
    LastModifiedAt *string `json:"lastModifiedAt,omitempty"`
    Name *string `json:"name,omitempty"`
    State *GoogleCloudApigeeV1EnvironmentGroupStateEnum `json:"state,omitempty"`
    
}

