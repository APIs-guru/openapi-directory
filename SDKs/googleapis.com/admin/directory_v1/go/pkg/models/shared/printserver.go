package shared

type PrintServer struct {
	CreateTime  *string `json:"createTime,omitempty"`
	Description *string `json:"description,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	ID          *string `json:"id,omitempty"`
	Name        *string `json:"name,omitempty"`
	OrgUnitID   *string `json:"orgUnitId,omitempty"`
	URI         *string `json:"uri,omitempty"`
}
