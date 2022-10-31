package shared

type TelephonyInfo struct {
	CarrierName *string `json:"carrierName,omitempty"`
	PhoneNumber *string `json:"phoneNumber,omitempty"`
}
