package shared

type OrgUnit struct {
	BlockInheritance  *bool   `json:"blockInheritance"`
	Description       *string `json:"description"`
	Etag              *string `json:"etag"`
	Kind              *string `json:"kind"`
	Name              *string `json:"name"`
	OrgUnitID         *string `json:"orgUnitId"`
	OrgUnitPath       *string `json:"orgUnitPath"`
	ParentOrgUnitID   *string `json:"parentOrgUnitId"`
	ParentOrgUnitPath *string `json:"parentOrgUnitPath"`
}
