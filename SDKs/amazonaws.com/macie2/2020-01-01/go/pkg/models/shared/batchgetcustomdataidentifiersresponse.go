package shared

type BatchGetCustomDataIdentifiersResponse struct {
	CustomDataIdentifiers []BatchGetCustomDataIdentifierSummary `json:"customDataIdentifiers"`
	NotFoundIdentifierIds []string                              `json:"notFoundIdentifierIds"`
}
