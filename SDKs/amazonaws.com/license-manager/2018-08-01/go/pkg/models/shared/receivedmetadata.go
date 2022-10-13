package shared

type ReceivedMetadata struct {
	AllowedOperations    []AllowedOperationEnum `json:"AllowedOperations"`
	ReceivedStatus       *ReceivedStatusEnum    `json:"ReceivedStatus"`
	ReceivedStatusReason *string                `json:"ReceivedStatusReason"`
}
