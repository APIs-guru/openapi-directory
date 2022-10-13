package shared

type Grant struct {
	GrantArn            string                 `json:"GrantArn"`
	GrantName           string                 `json:"GrantName"`
	GrantStatus         GrantStatusEnum        `json:"GrantStatus"`
	GrantedOperations   []AllowedOperationEnum `json:"GrantedOperations"`
	GranteePrincipalArn string                 `json:"GranteePrincipalArn"`
	HomeRegion          string                 `json:"HomeRegion"`
	LicenseArn          string                 `json:"LicenseArn"`
	ParentArn           string                 `json:"ParentArn"`
	StatusReason        *string                `json:"StatusReason"`
	Version             string                 `json:"Version"`
}
