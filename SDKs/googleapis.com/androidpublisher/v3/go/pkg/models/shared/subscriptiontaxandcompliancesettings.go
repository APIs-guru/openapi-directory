package shared

type SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum string

const (
	SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnumWithdrawalRightTypeUnspecified SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum = "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED"
	SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnumWithdrawalRightDigitalContent  SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum = "WITHDRAWAL_RIGHT_DIGITAL_CONTENT"
	SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnumWithdrawalRightService         SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum = "WITHDRAWAL_RIGHT_SERVICE"
)

// SubscriptionTaxAndComplianceSettings
// Details about taxation, Google Play policy and legal compliance for subscription products.
type SubscriptionTaxAndComplianceSettings struct {
	EeaWithdrawalRightType  *SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum `json:"eeaWithdrawalRightType,omitempty"`
	TaxRateInfoByRegionCode map[string]RegionalTaxRateInfo                                  `json:"taxRateInfoByRegionCode,omitempty"`
}
