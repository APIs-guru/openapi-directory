package shared

type CompanySetupConfigViewModel struct {
	FinancialYear     *CompanyFinancialYearViewModel    `json:"financialYear"`
	GeneralDetails    *CompanyGeneralDetaisViewModel    `json:"generalDetails"`
	Options           *CompanyOptionViewModel           `json:"options"`
	ReferenceSettings *CompanyReferenceSettingViewModel `json:"referenceSettings"`
}
