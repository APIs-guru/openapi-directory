package shared

type CreateGovCloudAccountRequest struct {
	AccountName            string                      `json:"AccountName"`
	Email                  string                      `json:"Email"`
	IamUserAccessToBilling *IamUserAccessToBillingEnum `json:"IamUserAccessToBilling,omitempty"`
	RoleName               *string                     `json:"RoleName,omitempty"`
	Tags                   []Tag                       `json:"Tags,omitempty"`
}
