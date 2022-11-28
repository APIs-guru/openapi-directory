package shared

// TelephonyInfo
// Telephony information associated with a given SIM card on the device. Only supported on fully managed devices starting from Android API level 23.
type TelephonyInfo struct {
	CarrierName *string `json:"carrierName,omitempty"`
	PhoneNumber *string `json:"phoneNumber,omitempty"`
}
