package shared

type DeleteNamespaceResponse struct {
	NamespaceArn  *string `json:"namespaceArn"`
	NamespaceName *string `json:"namespaceName"`
}
