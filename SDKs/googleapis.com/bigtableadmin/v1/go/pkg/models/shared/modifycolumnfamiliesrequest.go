package shared

// ModifyColumnFamiliesRequest
// Request message for google.bigtable.admin.v2.BigtableTableAdmin.ModifyColumnFamilies
type ModifyColumnFamiliesRequest struct {
	Modifications []Modification `json:"modifications,omitempty"`
}
