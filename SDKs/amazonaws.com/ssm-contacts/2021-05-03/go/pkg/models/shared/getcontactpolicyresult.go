package shared

type GetContactPolicyResult struct {
	ContactArn *string `json:"ContactArn"`
	Policy     *string `json:"Policy"`
}
