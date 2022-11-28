package shared

// PosixProfile
// The full POSIX identity, including user ID (<code>Uid</code>), group ID (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.
type PosixProfile struct {
	Gid           int64   `json:"Gid"`
	SecondaryGids []int64 `json:"SecondaryGids,omitempty"`
	UID           int64   `json:"Uid"`
}
