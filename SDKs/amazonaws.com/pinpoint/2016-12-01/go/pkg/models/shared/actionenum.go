package shared

type ActionEnum string

const (
	ActionEnumOpenApp  ActionEnum = "OPEN_APP"
	ActionEnumDeepLink ActionEnum = "DEEP_LINK"
	ActionEnumURL      ActionEnum = "URL"
)
