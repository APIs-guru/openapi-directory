package shared

type SessionEntity struct {
	Allowed2faMethodSms   *bool   `json:"allowed_2fa_method_sms"`
	Allowed2faMethodTotp  *bool   `json:"allowed_2fa_method_totp"`
	Allowed2faMethodU2f   *bool   `json:"allowed_2fa_method_u2f"`
	Allowed2faMethodYubi  *bool   `json:"allowed_2fa_method_yubi"`
	ID                    *string `json:"id"`
	Language              *string `json:"language"`
	LoginToken            *string `json:"login_token"`
	LoginTokenDomain      *string `json:"login_token_domain"`
	MaxDirListingSize     *int32  `json:"max_dir_listing_size"`
	MultipleRegions       *bool   `json:"multiple_regions"`
	ReadOnly              *bool   `json:"read_only"`
	RootPath              *string `json:"root_path"`
	SiteID                *int32  `json:"site_id"`
	SslRequired           *bool   `json:"ssl_required"`
	TLSDisabled           *bool   `json:"tls_disabled"`
	TwoFactorSetupNeeded  *bool   `json:"two_factor_setup_needed"`
	UseProvidedModifiedAt *bool   `json:"use_provided_modified_at"`
	WindowsModeFtp        *bool   `json:"windows_mode_ftp"`
}
