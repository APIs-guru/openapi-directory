package shared

// Group
// Google Groups provide your users the ability to send messages to groups of people using the group's email address. For more information about common tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-groups).
type Group struct {
	AdminCreated       *bool    `json:"adminCreated,omitempty"`
	Aliases            []string `json:"aliases,omitempty"`
	Description        *string  `json:"description,omitempty"`
	DirectMembersCount *string  `json:"directMembersCount,omitempty"`
	Email              *string  `json:"email,omitempty"`
	Etag               *string  `json:"etag,omitempty"`
	ID                 *string  `json:"id,omitempty"`
	Kind               *string  `json:"kind,omitempty"`
	Name               *string  `json:"name,omitempty"`
	NonEditableAliases []string `json:"nonEditableAliases,omitempty"`
}
