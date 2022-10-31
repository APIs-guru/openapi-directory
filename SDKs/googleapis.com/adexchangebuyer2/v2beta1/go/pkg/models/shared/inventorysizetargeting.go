package shared



type InventorySizeTargeting struct {
    ExcludedInventorySizes []AdSize `json:"excludedInventorySizes,omitempty"`
    TargetedInventorySizes []AdSize `json:"targetedInventorySizes,omitempty"`
    
}

