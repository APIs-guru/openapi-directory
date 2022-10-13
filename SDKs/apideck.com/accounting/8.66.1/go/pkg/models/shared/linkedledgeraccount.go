package shared

type LinkedLedgerAccount struct {
	Code        *string `json:"code"`
	ID          *string `json:"id"`
	Name        *string `json:"name"`
	NominalCode *string `json:"nominal_code"`
}
