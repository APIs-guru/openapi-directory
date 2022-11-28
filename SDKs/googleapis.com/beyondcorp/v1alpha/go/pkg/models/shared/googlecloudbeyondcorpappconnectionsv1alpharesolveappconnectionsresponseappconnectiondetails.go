package shared

// GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails
// Details of the AppConnection.
type GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails struct {
	AppConnection *GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection `json:"appConnection,omitempty"`
	RecentMigVms  []string                                                 `json:"recentMigVms,omitempty"`
}
