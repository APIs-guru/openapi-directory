package shared

type PrintServer struct {
	CreateTime  *string `json:"createTime"`
	Description *string `json:"description"`
	DisplayName *string `json:"displayName"`
	ID          *string `json:"id"`
	Name        *string `json:"name"`
	OrgUnitID   *string `json:"orgUnitId"`
	URI         *string `json:"uri"`
}
