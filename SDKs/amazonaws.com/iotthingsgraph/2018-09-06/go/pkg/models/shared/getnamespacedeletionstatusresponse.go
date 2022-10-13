package shared

type GetNamespaceDeletionStatusResponse struct {
	ErrorCode     *NamespaceDeletionStatusErrorCodesEnum `json:"errorCode"`
	ErrorMessage  *string                                `json:"errorMessage"`
	NamespaceArn  *string                                `json:"namespaceArn"`
	NamespaceName *string                                `json:"namespaceName"`
	Status        *NamespaceDeletionStatusEnum           `json:"status"`
}
