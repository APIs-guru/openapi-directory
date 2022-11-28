package shared

// UserContext
// Information about the user who created or modified an experiment, trial, trial component, or project.
type UserContext struct {
	DomainID        *string `json:"DomainId,omitempty"`
	UserProfileArn  *string `json:"UserProfileArn,omitempty"`
	UserProfileName *string `json:"UserProfileName,omitempty"`
}
