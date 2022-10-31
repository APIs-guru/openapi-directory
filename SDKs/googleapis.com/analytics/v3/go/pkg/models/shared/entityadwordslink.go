package shared

type EntityAdWordsLinkEntity struct {
	WebPropertyRef *WebPropertyRef `json:"webPropertyRef,omitempty"`
}

type EntityAdWordsLink struct {
	AdWordsAccounts []AdWordsAccount         `json:"adWordsAccounts,omitempty"`
	Entity          *EntityAdWordsLinkEntity `json:"entity,omitempty"`
	ID              *string                  `json:"id,omitempty"`
	Kind            *string                  `json:"kind,omitempty"`
	Name            *string                  `json:"name,omitempty"`
	ProfileIds      []string                 `json:"profileIds,omitempty"`
	SelfLink        *string                  `json:"selfLink,omitempty"`
}
