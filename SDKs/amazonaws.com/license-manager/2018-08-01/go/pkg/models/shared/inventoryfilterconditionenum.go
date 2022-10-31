package shared

type InventoryFilterConditionEnum string

const (
	InventoryFilterConditionEnumEquals     InventoryFilterConditionEnum = "EQUALS"
	InventoryFilterConditionEnumNotEquals  InventoryFilterConditionEnum = "NOT_EQUALS"
	InventoryFilterConditionEnumBeginsWith InventoryFilterConditionEnum = "BEGINS_WITH"
	InventoryFilterConditionEnumContains   InventoryFilterConditionEnum = "CONTAINS"
)
