package shared

type GetBundlesRequest struct {
	IncludeInactive *bool   `json:"includeInactive"`
	PageToken       *string `json:"pageToken"`
}
