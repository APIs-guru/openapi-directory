package shared



type SessionEntity struct {
    Allowed2faMethodSms *bool `json:"allowed_2fa_method_sms,omitempty"`
    Allowed2faMethodTotp *bool `json:"allowed_2fa_method_totp,omitempty"`
    Allowed2faMethodU2f *bool `json:"allowed_2fa_method_u2f,omitempty"`
    Allowed2faMethodYubi *bool `json:"allowed_2fa_method_yubi,omitempty"`
    ID *string `json:"id,omitempty"`
    Language *string `json:"language,omitempty"`
    LoginToken *string `json:"login_token,omitempty"`
    LoginTokenDomain *string `json:"login_token_domain,omitempty"`
    MaxDirListingSize *int32 `json:"max_dir_listing_size,omitempty"`
    MultipleRegions *bool `json:"multiple_regions,omitempty"`
    ReadOnly *bool `json:"read_only,omitempty"`
    RootPath *string `json:"root_path,omitempty"`
    SiteID *int32 `json:"site_id,omitempty"`
    SslRequired *bool `json:"ssl_required,omitempty"`
    TLSDisabled *bool `json:"tls_disabled,omitempty"`
    TwoFactorSetupNeeded *bool `json:"two_factor_setup_needed,omitempty"`
    UseProvidedModifiedAt *bool `json:"use_provided_modified_at,omitempty"`
    WindowsModeFtp *bool `json:"windows_mode_ftp,omitempty"`
    
}

