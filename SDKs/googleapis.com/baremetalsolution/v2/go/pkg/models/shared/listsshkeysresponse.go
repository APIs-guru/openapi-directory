package shared

type ListSSHKeysResponse struct {
	NextPageToken *string  `json:"nextPageToken"`
	SSHKeys       []SSHKey `json:"sshKeys"`
}
