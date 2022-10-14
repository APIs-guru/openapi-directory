package shared

type EntityUserLinkEntity struct {
	AccountRef     *AccountRef     `json:"accountRef,omitempty"`
	ProfileRef     *ProfileRef     `json:"profileRef,omitempty"`
	WebPropertyRef *WebPropertyRef `json:"webPropertyRef,omitempty"`
}

type EntityUserLinkPermissions struct {
	Effective []string `json:"effective,omitempty"`
	Local     []string `json:"local,omitempty"`
}

type EntityUserLink struct {
	Entity      *EntityUserLinkEntity      `json:"entity,omitempty"`
	ID          *string                    `json:"id,omitempty"`
	Kind        *string                    `json:"kind,omitempty"`
	Permissions *EntityUserLinkPermissions `json:"permissions,omitempty"`
	SelfLink    *string                    `json:"selfLink,omitempty"`
	UserRef     *UserRef                   `json:"userRef,omitempty"`
}
