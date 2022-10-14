package shared

type DefaultAccount struct {
	Gid           *int64  `json:"gid,omitempty"`
	HashAlgorithm *string `json:"hash_algorithm,omitempty"`
	HomeDir       *string `json:"home_dir,omitempty"`
	Name          *string `json:"name,omitempty"`
	PwdHash       *string `json:"pwd_hash,omitempty"`
	Shell         *string `json:"shell,omitempty"`
	UID           *int64  `json:"uid,omitempty"`
}
