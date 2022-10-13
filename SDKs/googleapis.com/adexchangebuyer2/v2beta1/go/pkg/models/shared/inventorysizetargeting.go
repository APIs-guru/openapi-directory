package shared

type InventorySizeTargeting struct {
	ExcludedInventorySizes []AdSize `json:"excludedInventorySizes"`
	TargetedInventorySizes []AdSize `json:"targetedInventorySizes"`
}
