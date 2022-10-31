package shared



type OrgUnit struct {
    BlockInheritance *bool `json:"blockInheritance,omitempty"`
    Description *string `json:"description,omitempty"`
    Etag *string `json:"etag,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Name *string `json:"name,omitempty"`
    OrgUnitID *string `json:"orgUnitId,omitempty"`
    OrgUnitPath *string `json:"orgUnitPath,omitempty"`
    ParentOrgUnitID *string `json:"parentOrgUnitId,omitempty"`
    ParentOrgUnitPath *string `json:"parentOrgUnitPath,omitempty"`
    
}

