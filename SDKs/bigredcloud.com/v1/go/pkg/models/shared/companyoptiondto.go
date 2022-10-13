package shared

type CompanyOptionDto struct {
	AllowEntryOfGrossPriceInInvoicing *bool    `json:"allowEntryOfGrossPriceInInvoicing"`
	CreditInputForReverseChargeVat    *bool    `json:"creditInputForReverseChargeVAT"`
	CreditNoteJournalAgeingName       *string  `json:"creditNoteJournalAgeingName"`
	CreditNoteJournalAgeingValue      *int32   `json:"creditNoteJournalAgeingValue"`
	DiscrepancyAllowed                *float64 `json:"discrepancyAllowed"`
	EnableVocrReporting               *bool    `json:"enableVOCRReporting"`
	MarginVatScheme                   *bool    `json:"marginVatScheme"`
	PrintOsItemsOnly                  *bool    `json:"printOSItemsOnly"`
	PurchasesVatAnalysisType          *int64   `json:"purchasesVatAnalysisType"`
	SalesVatAnalysisType              *int64   `json:"salesVatAnalysisType"`
	UseAllocations                    *bool    `json:"useAllocations"`
	UseNominal                        *bool    `json:"useNominal"`
	UseNominalCode                    *bool    `json:"useNominalCode"`
	VocrSettingValue                  *bool    `json:"vocrSettingValue"`
}
