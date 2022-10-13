package shared

type GetPolicyResponse struct {
	Policy     *string `json:"Policy"`
	RevisionID *string `json:"RevisionId"`
}
