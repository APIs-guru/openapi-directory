package shared

type CreateAccount struct {
	FtpPassword   *string `json:"ftp_password"`
	Identifier    *string `json:"identifier"`
	ServicepackID *int32  `json:"servicepack_id"`
}
