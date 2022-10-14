package shared

type CompanyReferenceSettingViewModel struct {
	CreditorsJournal *bool `json:"creditorsJournal,omitempty"`
	DebtorsJournal   *bool `json:"debtorsJournal,omitempty"`
	Purchases        *bool `json:"purchases,omitempty"`
	Sales            *bool `json:"sales,omitempty"`
}
