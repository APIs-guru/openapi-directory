package shared

type ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum string

const (
	ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnumWithdrawalRightTypeUnspecified ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum = "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED"
	ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnumWithdrawalRightDigitalContent  ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum = "WITHDRAWAL_RIGHT_DIGITAL_CONTENT"
	ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnumWithdrawalRightService         ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum = "WITHDRAWAL_RIGHT_SERVICE"
)

type ManagedProductTaxAndComplianceSettings struct {
	EeaWithdrawalRightType  *ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum `json:"eeaWithdrawalRightType"`
	TaxRateInfoByRegionCode map[string]RegionalTaxRateInfo                                    `json:"taxRateInfoByRegionCode"`
}
