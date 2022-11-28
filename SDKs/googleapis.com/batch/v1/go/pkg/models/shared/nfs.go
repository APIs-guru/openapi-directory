package shared

// Nfs
// Represents an NFS volume.
type Nfs struct {
	RemotePath *string `json:"remotePath,omitempty"`
	Server     *string `json:"server,omitempty"`
}
