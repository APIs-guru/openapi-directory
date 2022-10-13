package shared

type CreateAccountRequest struct {
	AccountName            string                      `json:"AccountName"`
	Email                  string                      `json:"Email"`
	IamUserAccessToBilling *IamUserAccessToBillingEnum `json:"IamUserAccessToBilling"`
	RoleName               *string                     `json:"RoleName"`
	Tags                   []Tag                       `json:"Tags"`
}
