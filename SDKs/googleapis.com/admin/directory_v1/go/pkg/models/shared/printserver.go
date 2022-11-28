package shared

// PrintServerInput
// Configuration for a print server.
type PrintServerInput struct {
	Description *string `json:"description,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	ID          *string `json:"id,omitempty"`
	Name        *string `json:"name,omitempty"`
	OrgUnitID   *string `json:"orgUnitId,omitempty"`
	URI         *string `json:"uri,omitempty"`
}

// PrintServer
// Configuration for a print server.
type PrintServer struct {
	CreateTime  *string `json:"createTime,omitempty"`
	Description *string `json:"description,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	ID          *string `json:"id,omitempty"`
	Name        *string `json:"name,omitempty"`
	OrgUnitID   *string `json:"orgUnitId,omitempty"`
	URI         *string `json:"uri,omitempty"`
}
