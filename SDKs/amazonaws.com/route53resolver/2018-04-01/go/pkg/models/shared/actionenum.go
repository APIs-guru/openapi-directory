package shared

type ActionEnum string

const (
	ActionEnumAllow ActionEnum = "ALLOW"
	ActionEnumBlock ActionEnum = "BLOCK"
	ActionEnumAlert ActionEnum = "ALERT"
)
