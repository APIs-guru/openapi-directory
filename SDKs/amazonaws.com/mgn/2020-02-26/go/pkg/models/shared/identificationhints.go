package shared

type IdentificationHints struct {
	AwsInstanceID *string `json:"awsInstanceID,omitempty"`
	Fqdn          *string `json:"fqdn,omitempty"`
	Hostname      *string `json:"hostname,omitempty"`
	VMWareUUID    *string `json:"vmWareUuid,omitempty"`
}
