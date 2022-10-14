package shared

type ApplicationDataTransfer struct {
	ApplicationID             *string                    `json:"applicationId,omitempty"`
	ApplicationTransferParams []ApplicationTransferParam `json:"applicationTransferParams,omitempty"`
	ApplicationTransferStatus *string                    `json:"applicationTransferStatus,omitempty"`
}
