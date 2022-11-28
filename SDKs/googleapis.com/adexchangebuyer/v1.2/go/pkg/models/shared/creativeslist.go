package shared

// CreativesList
// The creatives feed lists the active creatives for the Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single creative.
type CreativesList struct {
	Items         []Creative `json:"items,omitempty"`
	Kind          *string    `json:"kind,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
