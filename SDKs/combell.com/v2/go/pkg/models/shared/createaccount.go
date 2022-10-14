package shared

type CreateAccount struct {
	FtpPassword   *string `json:"ftp_password,omitempty"`
	Identifier    *string `json:"identifier,omitempty"`
	ServicepackID *int32  `json:"servicepack_id,omitempty"`
}
