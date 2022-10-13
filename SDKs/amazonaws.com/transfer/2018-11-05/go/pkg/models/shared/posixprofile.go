package shared

type PosixProfile struct {
	Gid           int64   `json:"Gid"`
	SecondaryGids []int64 `json:"SecondaryGids"`
	UID           int64   `json:"Uid"`
}
