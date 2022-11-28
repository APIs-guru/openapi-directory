package shared

// EntityUserLinkEntity
// Entity for this link. It can be an account, a web property, or a view (profile).
type EntityUserLinkEntity struct {
	AccountRef     *AccountRef     `json:"accountRef,omitempty"`
	ProfileRef     *ProfileRef     `json:"profileRef,omitempty"`
	WebPropertyRef *WebPropertyRef `json:"webPropertyRef,omitempty"`
}

// EntityUserLinkPermissions
// Permissions the user has for this entity.
type EntityUserLinkPermissions struct {
	Effective []string `json:"effective,omitempty"`
	Local     []string `json:"local,omitempty"`
}

// EntityUserLinkPermissionsInput
// Permissions the user has for this entity.
type EntityUserLinkPermissionsInput struct {
	Local []string `json:"local,omitempty"`
}

// EntityUserLink
// JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
type EntityUserLink struct {
	Entity      *EntityUserLinkEntity      `json:"entity,omitempty"`
	ID          *string                    `json:"id,omitempty"`
	Kind        *string                    `json:"kind,omitempty"`
	Permissions *EntityUserLinkPermissions `json:"permissions,omitempty"`
	SelfLink    *string                    `json:"selfLink,omitempty"`
	UserRef     *UserRef                   `json:"userRef,omitempty"`
}

// EntityUserLinkInput
// JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
type EntityUserLinkInput struct {
	Entity      *EntityUserLinkEntity           `json:"entity,omitempty"`
	ID          *string                         `json:"id,omitempty"`
	Kind        *string                         `json:"kind,omitempty"`
	Permissions *EntityUserLinkPermissionsInput `json:"permissions,omitempty"`
	SelfLink    *string                         `json:"selfLink,omitempty"`
	UserRef     *UserRef                        `json:"userRef,omitempty"`
}
