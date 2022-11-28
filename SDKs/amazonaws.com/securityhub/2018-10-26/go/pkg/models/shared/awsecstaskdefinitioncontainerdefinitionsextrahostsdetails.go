package shared

// AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails
// A hostname and IP address mapping to append to the <b>/etc/hosts</b> file on the container.
type AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails struct {
	Hostname  *string `json:"Hostname,omitempty"`
	IPAddress *string `json:"IpAddress,omitempty"`
}
