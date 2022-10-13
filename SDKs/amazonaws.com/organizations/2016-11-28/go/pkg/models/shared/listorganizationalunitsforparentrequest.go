package shared

type ListOrganizationalUnitsForParentRequest struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
	ParentID   string  `json:"ParentId"`
}
