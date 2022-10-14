package shared

type GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum string

const (
	GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnumConnectionStateUnspecified GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum = "CONNECTION_STATE_UNSPECIFIED"
	GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnumUnavailable                GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum = "UNAVAILABLE"
	GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnumPending                    GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum = "PENDING"
	GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnumAccepted                   GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum = "ACCEPTED"
	GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnumRejected                   GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum = "REJECTED"
	GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnumClosed                     GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum = "CLOSED"
	GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnumFrozen                     GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum = "FROZEN"
	GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnumNeedsAttention             GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum = "NEEDS_ATTENTION"
)

type GoogleCloudApigeeV1EndpointAttachmentStateEnum string

const (
	GoogleCloudApigeeV1EndpointAttachmentStateEnumStateUnspecified GoogleCloudApigeeV1EndpointAttachmentStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudApigeeV1EndpointAttachmentStateEnumCreating         GoogleCloudApigeeV1EndpointAttachmentStateEnum = "CREATING"
	GoogleCloudApigeeV1EndpointAttachmentStateEnumActive           GoogleCloudApigeeV1EndpointAttachmentStateEnum = "ACTIVE"
	GoogleCloudApigeeV1EndpointAttachmentStateEnumDeleting         GoogleCloudApigeeV1EndpointAttachmentStateEnum = "DELETING"
	GoogleCloudApigeeV1EndpointAttachmentStateEnumUpdating         GoogleCloudApigeeV1EndpointAttachmentStateEnum = "UPDATING"
)

type GoogleCloudApigeeV1EndpointAttachment struct {
	ConnectionState   *GoogleCloudApigeeV1EndpointAttachmentConnectionStateEnum `json:"connectionState,omitempty"`
	Host              *string                                                   `json:"host,omitempty"`
	Location          *string                                                   `json:"location,omitempty"`
	Name              *string                                                   `json:"name,omitempty"`
	ServiceAttachment *string                                                   `json:"serviceAttachment,omitempty"`
	State             *GoogleCloudApigeeV1EndpointAttachmentStateEnum           `json:"state,omitempty"`
}
