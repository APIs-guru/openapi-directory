package shared

type AssociateWebACLRequest struct {
	ResourceArn string `json:"ResourceArn"`
	WebACLID    string `json:"WebACLId"`
}
