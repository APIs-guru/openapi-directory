package shared

type Printer struct {
	AuxiliaryMessages   []AuxiliaryMessage `json:"auxiliaryMessages"`
	CreateTime          *string            `json:"createTime"`
	Description         *string            `json:"description"`
	DisplayName         *string            `json:"displayName"`
	ID                  *string            `json:"id"`
	MakeAndModel        *string            `json:"makeAndModel"`
	Name                *string            `json:"name"`
	OrgUnitID           *string            `json:"orgUnitId"`
	URI                 *string            `json:"uri"`
	UseDriverlessConfig *bool              `json:"useDriverlessConfig"`
}
