package shared

type PutContactPolicyRequest struct {
	ContactArn string `json:"ContactArn"`
	Policy     string `json:"Policy"`
}
