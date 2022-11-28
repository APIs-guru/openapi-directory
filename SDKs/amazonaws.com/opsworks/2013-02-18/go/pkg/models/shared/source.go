package shared

// Source
// Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Custom Recipes and Cookbooks</a>.
type Source struct {
	Password *string         `json:"Password,omitempty"`
	Revision *string         `json:"Revision,omitempty"`
	SSHKey   *string         `json:"SshKey,omitempty"`
	Type     *SourceTypeEnum `json:"Type,omitempty"`
	URL      *string         `json:"Url,omitempty"`
	Username *string         `json:"Username,omitempty"`
}
