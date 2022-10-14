package shared

type GetBlueprintsRequest struct {
	IncludeInactive *bool   `json:"includeInactive,omitempty"`
	PageToken       *string `json:"pageToken,omitempty"`
}
