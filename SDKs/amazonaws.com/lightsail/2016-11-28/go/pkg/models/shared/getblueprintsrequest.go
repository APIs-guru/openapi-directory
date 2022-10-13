package shared

type GetBlueprintsRequest struct {
	IncludeInactive *bool   `json:"includeInactive"`
	PageToken       *string `json:"pageToken"`
}
