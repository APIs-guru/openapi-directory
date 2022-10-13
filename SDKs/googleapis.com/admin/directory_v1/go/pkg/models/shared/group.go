package shared

type Group struct {
	AdminCreated       *bool    `json:"adminCreated"`
	Aliases            []string `json:"aliases"`
	Description        *string  `json:"description"`
	DirectMembersCount *string  `json:"directMembersCount"`
	Email              *string  `json:"email"`
	Etag               *string  `json:"etag"`
	ID                 *string  `json:"id"`
	Kind               *string  `json:"kind"`
	Name               *string  `json:"name"`
	NonEditableAliases []string `json:"nonEditableAliases"`
}
