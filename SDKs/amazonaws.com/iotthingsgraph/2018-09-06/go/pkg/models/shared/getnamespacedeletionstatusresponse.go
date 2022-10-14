package shared

type GetNamespaceDeletionStatusResponse struct {
	ErrorCode     *NamespaceDeletionStatusErrorCodesEnum `json:"errorCode,omitempty"`
	ErrorMessage  *string                                `json:"errorMessage,omitempty"`
	NamespaceArn  *string                                `json:"namespaceArn,omitempty"`
	NamespaceName *string                                `json:"namespaceName,omitempty"`
	Status        *NamespaceDeletionStatusEnum           `json:"status,omitempty"`
}
