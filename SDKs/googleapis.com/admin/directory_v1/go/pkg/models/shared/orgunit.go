package shared

// OrgUnit
// Managing your account's organizational units allows you to configure your users' access to services and custom settings. For more information about common organizational unit tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-org-units.html). The customer's organizational unit hierarchy is limited to 35 levels of depth.
type OrgUnit struct {
	BlockInheritance  *bool   `json:"blockInheritance,omitempty"`
	Description       *string `json:"description,omitempty"`
	Etag              *string `json:"etag,omitempty"`
	Kind              *string `json:"kind,omitempty"`
	Name              *string `json:"name,omitempty"`
	OrgUnitID         *string `json:"orgUnitId,omitempty"`
	OrgUnitPath       *string `json:"orgUnitPath,omitempty"`
	ParentOrgUnitID   *string `json:"parentOrgUnitId,omitempty"`
	ParentOrgUnitPath *string `json:"parentOrgUnitPath,omitempty"`
}
