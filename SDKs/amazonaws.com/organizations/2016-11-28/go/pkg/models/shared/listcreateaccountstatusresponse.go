package shared

type ListCreateAccountStatusResponse struct {
	CreateAccountStatuses []CreateAccountStatus `json:"CreateAccountStatuses,omitempty"`
	NextToken             *string               `json:"NextToken,omitempty"`
}
