package shared




type GoogleCloudApigeeV1NatAddressStateEnum string

const (
    GoogleCloudApigeeV1NatAddressStateEnumStateUnspecified GoogleCloudApigeeV1NatAddressStateEnum = "STATE_UNSPECIFIED"
GoogleCloudApigeeV1NatAddressStateEnumCreating GoogleCloudApigeeV1NatAddressStateEnum = "CREATING"
GoogleCloudApigeeV1NatAddressStateEnumReserved GoogleCloudApigeeV1NatAddressStateEnum = "RESERVED"
GoogleCloudApigeeV1NatAddressStateEnumActive GoogleCloudApigeeV1NatAddressStateEnum = "ACTIVE"
GoogleCloudApigeeV1NatAddressStateEnumDeleting GoogleCloudApigeeV1NatAddressStateEnum = "DELETING"
)


type GoogleCloudApigeeV1NatAddress struct {
    IPAddress *string `json:"ipAddress,omitempty"`
    Name *string `json:"name,omitempty"`
    State *GoogleCloudApigeeV1NatAddressStateEnum `json:"state,omitempty"`
    
}

