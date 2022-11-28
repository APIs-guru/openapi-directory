package shared

// Tag
// A map that contains tag keys and tag values to attach to an AWS OpsWorks for Chef Automate or AWS OpsWorks for Puppet Enterprise server. Leading and trailing white spaces are trimmed from both the key and value. A maximum of 50 user-applied tags is allowed for tag-supported AWS OpsWorks-CM resources.
type Tag struct {
	Key   string `json:"Key"`
	Value string `json:"Value"`
}
