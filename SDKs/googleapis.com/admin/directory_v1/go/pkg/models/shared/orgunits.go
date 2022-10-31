package shared

type OrgUnits struct {
	Etag              *string   `json:"etag,omitempty"`
	Kind              *string   `json:"kind,omitempty"`
	OrganizationUnits []OrgUnit `json:"organizationUnits,omitempty"`
}
