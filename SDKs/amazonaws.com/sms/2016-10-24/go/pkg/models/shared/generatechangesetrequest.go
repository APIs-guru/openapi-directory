package shared

type GenerateChangeSetRequest struct {
	AppID           *string           `json:"appId,omitempty"`
	ChangesetFormat *OutputFormatEnum `json:"changesetFormat,omitempty"`
}
