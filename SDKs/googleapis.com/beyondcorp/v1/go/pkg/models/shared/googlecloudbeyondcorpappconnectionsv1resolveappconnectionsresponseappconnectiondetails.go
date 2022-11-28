package shared

// GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails
// Details of the AppConnection.
type GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails struct {
	AppConnection *GoogleCloudBeyondcorpAppconnectionsV1AppConnection `json:"appConnection,omitempty"`
	RecentMigVms  []string                                            `json:"recentMigVms,omitempty"`
}
