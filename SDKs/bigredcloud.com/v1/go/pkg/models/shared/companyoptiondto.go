package shared

type CompanyOptionDto struct {
	AllowEntryOfGrossPriceInInvoicing *bool    `json:"allowEntryOfGrossPriceInInvoicing,omitempty"`
	CreditInputForReverseChargeVat    *bool    `json:"creditInputForReverseChargeVAT,omitempty"`
	CreditNoteJournalAgeingName       *string  `json:"creditNoteJournalAgeingName,omitempty"`
	CreditNoteJournalAgeingValue      *int32   `json:"creditNoteJournalAgeingValue,omitempty"`
	DiscrepancyAllowed                *float64 `json:"discrepancyAllowed,omitempty"`
	EnableVocrReporting               *bool    `json:"enableVOCRReporting,omitempty"`
	MarginVatScheme                   *bool    `json:"marginVatScheme,omitempty"`
	PrintOsItemsOnly                  *bool    `json:"printOSItemsOnly,omitempty"`
	PurchasesVatAnalysisType          *int64   `json:"purchasesVatAnalysisType,omitempty"`
	SalesVatAnalysisType              *int64   `json:"salesVatAnalysisType,omitempty"`
	UseAllocations                    *bool    `json:"useAllocations,omitempty"`
	UseNominal                        *bool    `json:"useNominal,omitempty"`
	UseNominalCode                    *bool    `json:"useNominalCode,omitempty"`
	VocrSettingValue                  *bool    `json:"vocrSettingValue,omitempty"`
}
