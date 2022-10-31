package shared

type ListSSHKeysResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	SSHKeys       []SSHKey `json:"sshKeys,omitempty"`
}
