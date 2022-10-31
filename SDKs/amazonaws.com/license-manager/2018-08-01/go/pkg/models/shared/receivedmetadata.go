package shared



type ReceivedMetadata struct {
    AllowedOperations []AllowedOperationEnum `json:"AllowedOperations,omitempty"`
    ReceivedStatus *ReceivedStatusEnum `json:"ReceivedStatus,omitempty"`
    ReceivedStatusReason *string `json:"ReceivedStatusReason,omitempty"`
    
}

