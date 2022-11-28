package shared

type BlockActionBlockScopeEnum string

const (
	BlockActionBlockScopeEnumBlockScopeUnspecified BlockActionBlockScopeEnum = "BLOCK_SCOPE_UNSPECIFIED"
	BlockActionBlockScopeEnumBlockScopeWorkProfile BlockActionBlockScopeEnum = "BLOCK_SCOPE_WORK_PROFILE"
	BlockActionBlockScopeEnumBlockScopeDevice      BlockActionBlockScopeEnum = "BLOCK_SCOPE_DEVICE"
)

// BlockAction
// An action to block access to apps and data on a fully managed device or in a work profile. This action also triggers a device or work profile to displays a user-facing notification with information (where possible) on how to correct the compliance issue. Note: wipeAction must also be specified.
type BlockAction struct {
	BlockAfterDays *int32                     `json:"blockAfterDays,omitempty"`
	BlockScope     *BlockActionBlockScopeEnum `json:"blockScope,omitempty"`
}
