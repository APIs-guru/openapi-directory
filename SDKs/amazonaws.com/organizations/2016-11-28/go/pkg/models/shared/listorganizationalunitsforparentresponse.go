package shared

type ListOrganizationalUnitsForParentResponse struct {
	NextToken           *string              `json:"NextToken"`
	OrganizationalUnits []OrganizationalUnit `json:"OrganizationalUnits"`
}
