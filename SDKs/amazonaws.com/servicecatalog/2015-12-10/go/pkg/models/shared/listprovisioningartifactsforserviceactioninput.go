package shared

type ListProvisioningArtifactsForServiceActionInput struct {
	AcceptLanguage  *string `json:"AcceptLanguage"`
	PageSize        *int64  `json:"PageSize"`
	PageToken       *string `json:"PageToken"`
	ServiceActionID string  `json:"ServiceActionId"`
}
