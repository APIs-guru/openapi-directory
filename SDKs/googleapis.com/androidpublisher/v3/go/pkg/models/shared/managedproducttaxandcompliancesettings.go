package shared

type ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum string

const (
	ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnumWithdrawalRightTypeUnspecified ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum = "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED"
	ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnumWithdrawalRightDigitalContent  ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum = "WITHDRAWAL_RIGHT_DIGITAL_CONTENT"
	ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnumWithdrawalRightService         ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum = "WITHDRAWAL_RIGHT_SERVICE"
)

// ManagedProductTaxAndComplianceSettings
// Details about taxation and legal compliance for managed products.
type ManagedProductTaxAndComplianceSettings struct {
	EeaWithdrawalRightType  *ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum `json:"eeaWithdrawalRightType,omitempty"`
	TaxRateInfoByRegionCode map[string]RegionalTaxRateInfo                                    `json:"taxRateInfoByRegionCode,omitempty"`
}
