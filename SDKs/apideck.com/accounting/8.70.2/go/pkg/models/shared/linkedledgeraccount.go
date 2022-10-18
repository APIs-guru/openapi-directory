package shared

type LinkedLedgerAccount struct {
	Code        *string `json:"code,omitempty"`
	ID          *string `json:"id,omitempty"`
	Name        *string `json:"name,omitempty"`
	NominalCode *string `json:"nominal_code,omitempty"`
}
