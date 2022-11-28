package shared

// Printer
// Printer configuration.
type Printer struct {
	AuxiliaryMessages   []AuxiliaryMessage `json:"auxiliaryMessages,omitempty"`
	CreateTime          *string            `json:"createTime,omitempty"`
	Description         *string            `json:"description,omitempty"`
	DisplayName         *string            `json:"displayName,omitempty"`
	ID                  *string            `json:"id,omitempty"`
	MakeAndModel        *string            `json:"makeAndModel,omitempty"`
	Name                *string            `json:"name,omitempty"`
	OrgUnitID           *string            `json:"orgUnitId,omitempty"`
	URI                 *string            `json:"uri,omitempty"`
	UseDriverlessConfig *bool              `json:"useDriverlessConfig,omitempty"`
}

// PrinterInput
// Printer configuration.
type PrinterInput struct {
	Description         *string `json:"description,omitempty"`
	DisplayName         *string `json:"displayName,omitempty"`
	ID                  *string `json:"id,omitempty"`
	MakeAndModel        *string `json:"makeAndModel,omitempty"`
	Name                *string `json:"name,omitempty"`
	OrgUnitID           *string `json:"orgUnitId,omitempty"`
	URI                 *string `json:"uri,omitempty"`
	UseDriverlessConfig *bool   `json:"useDriverlessConfig,omitempty"`
}
