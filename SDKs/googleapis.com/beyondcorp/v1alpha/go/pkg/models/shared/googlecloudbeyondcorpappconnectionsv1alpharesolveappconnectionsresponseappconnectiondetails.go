package shared

type GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails struct {
	AppConnection *GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection `json:"appConnection,omitempty"`
	RecentMigVms  []string                                                 `json:"recentMigVms,omitempty"`
}
