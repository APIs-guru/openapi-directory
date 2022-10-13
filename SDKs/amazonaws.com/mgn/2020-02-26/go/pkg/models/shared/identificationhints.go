package shared

type IdentificationHints struct {
	AwsInstanceID *string `json:"awsInstanceID"`
	Fqdn          *string `json:"fqdn"`
	Hostname      *string `json:"hostname"`
	VMWareUUID    *string `json:"vmWareUuid"`
}
