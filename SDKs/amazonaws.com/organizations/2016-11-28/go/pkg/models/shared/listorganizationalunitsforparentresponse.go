package shared



type ListOrganizationalUnitsForParentResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    OrganizationalUnits []OrganizationalUnit `json:"OrganizationalUnits,omitempty"`
    
}

