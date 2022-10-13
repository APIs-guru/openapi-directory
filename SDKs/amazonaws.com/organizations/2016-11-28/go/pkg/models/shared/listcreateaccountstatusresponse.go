package shared

type ListCreateAccountStatusResponse struct {
	CreateAccountStatuses []CreateAccountStatus `json:"CreateAccountStatuses"`
	NextToken             *string               `json:"NextToken"`
}
