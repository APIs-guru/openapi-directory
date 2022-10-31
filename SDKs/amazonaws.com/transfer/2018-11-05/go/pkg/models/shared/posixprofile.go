package shared



type PosixProfile struct {
    Gid int64 `json:"Gid"`
    SecondaryGids []int64 `json:"SecondaryGids,omitempty"`
    UID int64 `json:"Uid"`
    
}

