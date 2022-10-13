package shared

type ApplicationDataTransfer struct {
	ApplicationID             *string                    `json:"applicationId"`
	ApplicationTransferParams []ApplicationTransferParam `json:"applicationTransferParams"`
	ApplicationTransferStatus *string                    `json:"applicationTransferStatus"`
}
