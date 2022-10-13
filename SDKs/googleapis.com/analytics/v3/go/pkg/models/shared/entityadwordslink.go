package shared

type EntityAdWordsLinkEntity struct {
	WebPropertyRef *WebPropertyRef `json:"webPropertyRef"`
}

type EntityAdWordsLink struct {
	AdWordsAccounts []AdWordsAccount         `json:"adWordsAccounts"`
	Entity          *EntityAdWordsLinkEntity `json:"entity"`
	ID              *string                  `json:"id"`
	Kind            *string                  `json:"kind"`
	Name            *string                  `json:"name"`
	ProfileIds      []string                 `json:"profileIds"`
	SelfLink        *string                  `json:"selfLink"`
}
