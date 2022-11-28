package shared

// InventoryItemAttribute
// Attributes are the entries within the inventory item content. It contains name and value.
type InventoryItemAttribute struct {
	DataType InventoryAttributeDataTypeEnum `json:"DataType"`
	Name     string                         `json:"Name"`
}
