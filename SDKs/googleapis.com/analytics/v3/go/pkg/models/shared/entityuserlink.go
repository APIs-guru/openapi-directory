package shared

type EntityUserLinkEntity struct {
	AccountRef     *AccountRef     `json:"accountRef"`
	ProfileRef     *ProfileRef     `json:"profileRef"`
	WebPropertyRef *WebPropertyRef `json:"webPropertyRef"`
}

type EntityUserLinkPermissions struct {
	Effective []string `json:"effective"`
	Local     []string `json:"local"`
}

type EntityUserLink struct {
	Entity      *EntityUserLinkEntity      `json:"entity"`
	ID          *string                    `json:"id"`
	Kind        *string                    `json:"kind"`
	Permissions *EntityUserLinkPermissions `json:"permissions"`
	SelfLink    *string                    `json:"selfLink"`
	UserRef     *UserRef                   `json:"userRef"`
}
