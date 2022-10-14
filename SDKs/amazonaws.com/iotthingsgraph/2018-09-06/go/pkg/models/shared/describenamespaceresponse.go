package shared

type DescribeNamespaceResponse struct {
	NamespaceArn             *string `json:"namespaceArn,omitempty"`
	NamespaceName            *string `json:"namespaceName,omitempty"`
	NamespaceVersion         *int64  `json:"namespaceVersion,omitempty"`
	TrackingNamespaceName    *string `json:"trackingNamespaceName,omitempty"`
	TrackingNamespaceVersion *int64  `json:"trackingNamespaceVersion,omitempty"`
}
