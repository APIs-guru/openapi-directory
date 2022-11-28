package shared

// TraceUser
// Information about a user recorded in segment documents.
type TraceUser struct {
	ServiceIds []ServiceID `json:"ServiceIds,omitempty"`
	UserName   *string     `json:"UserName,omitempty"`
}
