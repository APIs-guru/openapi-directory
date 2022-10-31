package shared

type SharedFileSystemConfiguration struct {
	Endpoint          *string `json:"endpoint,omitempty"`
	FileSystemID      *string `json:"fileSystemId,omitempty"`
	LinuxMountPoint   *string `json:"linuxMountPoint,omitempty"`
	ShareName         *string `json:"shareName,omitempty"`
	WindowsMountDrive *string `json:"windowsMountDrive,omitempty"`
}
