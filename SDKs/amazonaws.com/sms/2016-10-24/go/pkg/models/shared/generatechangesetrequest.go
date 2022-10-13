package shared

type GenerateChangeSetRequest struct {
	AppID           *string           `json:"appId"`
	ChangesetFormat *OutputFormatEnum `json:"changesetFormat"`
}
