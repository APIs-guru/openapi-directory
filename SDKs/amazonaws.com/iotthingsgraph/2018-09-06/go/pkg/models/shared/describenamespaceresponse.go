package shared

type DescribeNamespaceResponse struct {
	NamespaceArn             *string `json:"namespaceArn"`
	NamespaceName            *string `json:"namespaceName"`
	NamespaceVersion         *int64  `json:"namespaceVersion"`
	TrackingNamespaceName    *string `json:"trackingNamespaceName"`
	TrackingNamespaceVersion *int64  `json:"trackingNamespaceVersion"`
}
