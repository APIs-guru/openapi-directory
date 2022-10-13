package shared

type DefaultAccount struct {
	Gid           *int64  `json:"gid"`
	HashAlgorithm *string `json:"hash_algorithm"`
	HomeDir       *string `json:"home_dir"`
	Name          *string `json:"name"`
	PwdHash       *string `json:"pwd_hash"`
	Shell         *string `json:"shell"`
	UID           *int64  `json:"uid"`
}
