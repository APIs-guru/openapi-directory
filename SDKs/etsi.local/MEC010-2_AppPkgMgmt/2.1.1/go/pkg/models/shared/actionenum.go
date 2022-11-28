package shared

type ActionEnum string

const (
	ActionEnumDrop                   ActionEnum = "DROP"
	ActionEnumForwardDecapsulated    ActionEnum = "FORWARD_DECAPSULATED"
	ActionEnumForwardAsIs            ActionEnum = "FORWARD_AS_IS"
	ActionEnumPassthrough            ActionEnum = "PASSTHROUGH"
	ActionEnumDuplicatedDecapsulated ActionEnum = "DUPLICATED_DECAPSULATED"
	ActionEnumDuplicateAsIs          ActionEnum = "DUPLICATE_AS_IS"
)
