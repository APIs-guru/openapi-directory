package shared

type Source struct {
	Password *string         `json:"Password"`
	Revision *string         `json:"Revision"`
	SSHKey   *string         `json:"SshKey"`
	Type     *SourceTypeEnum `json:"Type"`
	URL      *string         `json:"Url"`
	Username *string         `json:"Username"`
}
