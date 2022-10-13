package shared

type CompanyReferenceSettingViewModel struct {
	CreditorsJournal *bool `json:"creditorsJournal"`
	DebtorsJournal   *bool `json:"debtorsJournal"`
	Purchases        *bool `json:"purchases"`
	Sales            *bool `json:"sales"`
}
