package shared

type InventoryFilter struct {
	Key    string                          `json:"Key"`
	Type   *InventoryQueryOperatorTypeEnum `json:"Type"`
	Values []string                        `json:"Values"`
}
