package shared

type DeviceAuthorizationCodeResponse struct {
	DeviceCode     string `json:"device_code"`
	DlMaskedEmail  string `json:"dl_masked_email"`
	DlMaskedMobile int64  `json:"dl_masked_mobile"`
	ExpiresIn      int64  `json:"expires_in"`
}
