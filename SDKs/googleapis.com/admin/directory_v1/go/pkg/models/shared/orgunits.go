package shared

type OrgUnits struct {
	Etag              *string   `json:"etag"`
	Kind              *string   `json:"kind"`
	OrganizationUnits []OrgUnit `json:"organizationUnits"`
}
