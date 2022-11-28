package shared

// ActionRemotePortDetails
// Provides information about the remote port that was involved in an attempted network connection.
type ActionRemotePortDetails struct {
	Port     *int64  `json:"Port,omitempty"`
	PortName *string `json:"PortName,omitempty"`
}
