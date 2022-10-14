package shared

type ReportWarningTypeEnum string

const (
	ReportWarningTypeEnumTypeUnspecified                  ReportWarningTypeEnum = "TYPE_UNSPECIFIED"
	ReportWarningTypeEnumDataBeforeAccountTimezoneChange  ReportWarningTypeEnum = "DATA_BEFORE_ACCOUNT_TIMEZONE_CHANGE"
	ReportWarningTypeEnumDataDelayed                      ReportWarningTypeEnum = "DATA_DELAYED"
	ReportWarningTypeEnumOther                            ReportWarningTypeEnum = "OTHER"
	ReportWarningTypeEnumReportCurrencyNotAccountCurrency ReportWarningTypeEnum = "REPORT_CURRENCY_NOT_ACCOUNT_CURRENCY"
)

type ReportWarning struct {
	Description *string                `json:"description,omitempty"`
	Type        *ReportWarningTypeEnum `json:"type,omitempty"`
}
