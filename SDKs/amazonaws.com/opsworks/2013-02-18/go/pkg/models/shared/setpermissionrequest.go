package shared

type SetPermissionRequest struct {
	AllowSSH   *bool   `json:"AllowSsh"`
	AllowSudo  *bool   `json:"AllowSudo"`
	IamUserArn string  `json:"IamUserArn"`
	Level      *string `json:"Level"`
	StackID    string  `json:"StackId"`
}
