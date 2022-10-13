package shared

type ModifyColumnFamiliesRequest struct {
	Modifications []Modification `json:"modifications"`
}
