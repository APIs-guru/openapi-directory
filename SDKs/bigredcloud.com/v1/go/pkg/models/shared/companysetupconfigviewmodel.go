package shared

type CompanySetupConfigViewModel struct {
	FinancialYear     *CompanyFinancialYearViewModel    `json:"financialYear,omitempty"`
	GeneralDetails    *CompanyGeneralDetaisViewModel    `json:"generalDetails,omitempty"`
	Options           *CompanyOptionViewModel           `json:"options,omitempty"`
	ReferenceSettings *CompanyReferenceSettingViewModel `json:"referenceSettings,omitempty"`
}
