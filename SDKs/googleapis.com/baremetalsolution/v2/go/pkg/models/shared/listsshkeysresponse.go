package shared

// ListSSHKeysResponse
// Message for response of ListSSHKeys.
type ListSSHKeysResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	SSHKeys       []SSHKey `json:"sshKeys,omitempty"`
}
