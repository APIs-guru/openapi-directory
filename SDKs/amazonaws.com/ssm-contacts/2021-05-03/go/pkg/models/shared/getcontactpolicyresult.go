package shared

type GetContactPolicyResult struct {
	ContactArn *string `json:"ContactArn,omitempty"`
	Policy     *string `json:"Policy,omitempty"`
}
