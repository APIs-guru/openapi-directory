package shared




type BlockActionBlockScopeEnum string

const (
    BlockActionBlockScopeEnumBlockScopeUnspecified BlockActionBlockScopeEnum = "BLOCK_SCOPE_UNSPECIFIED"
BlockActionBlockScopeEnumBlockScopeWorkProfile BlockActionBlockScopeEnum = "BLOCK_SCOPE_WORK_PROFILE"
BlockActionBlockScopeEnumBlockScopeDevice BlockActionBlockScopeEnum = "BLOCK_SCOPE_DEVICE"
)


type BlockAction struct {
    BlockAfterDays *int32 `json:"blockAfterDays,omitempty"`
    BlockScope *BlockActionBlockScopeEnum `json:"blockScope,omitempty"`
    
}

