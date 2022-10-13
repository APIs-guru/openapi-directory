package shared

type SharedFileSystemConfiguration struct {
	Endpoint          *string `json:"endpoint"`
	FileSystemID      *string `json:"fileSystemId"`
	LinuxMountPoint   *string `json:"linuxMountPoint"`
	ShareName         *string `json:"shareName"`
	WindowsMountDrive *string `json:"windowsMountDrive"`
}
