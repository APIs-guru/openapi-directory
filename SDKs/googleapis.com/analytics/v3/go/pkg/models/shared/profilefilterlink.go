package shared

// ProfileFilterLink
// JSON template for an Analytics profile filter link.
type ProfileFilterLink struct {
	FilterRef  *FilterRef  `json:"filterRef,omitempty"`
	ID         *string     `json:"id,omitempty"`
	Kind       *string     `json:"kind,omitempty"`
	ProfileRef *ProfileRef `json:"profileRef,omitempty"`
	Rank       *int32      `json:"rank,omitempty"`
	SelfLink   *string     `json:"selfLink,omitempty"`
}

// ProfileFilterLinkInput
// JSON template for an Analytics profile filter link.
type ProfileFilterLinkInput struct {
	FilterRef  *FilterRefInput `json:"filterRef,omitempty"`
	ID         *string         `json:"id,omitempty"`
	ProfileRef *ProfileRef     `json:"profileRef,omitempty"`
	Rank       *int32          `json:"rank,omitempty"`
}
