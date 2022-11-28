package shared

type ClickwrapEntityUseWithBundlesEnum string

const (
	ClickwrapEntityUseWithBundlesEnumNone      ClickwrapEntityUseWithBundlesEnum = "none"
	ClickwrapEntityUseWithBundlesEnumAvailable ClickwrapEntityUseWithBundlesEnum = "available"
	ClickwrapEntityUseWithBundlesEnumRequire   ClickwrapEntityUseWithBundlesEnum = "require"
)

type ClickwrapEntityUseWithInboxesEnum string

const (
	ClickwrapEntityUseWithInboxesEnumNone      ClickwrapEntityUseWithInboxesEnum = "none"
	ClickwrapEntityUseWithInboxesEnumAvailable ClickwrapEntityUseWithInboxesEnum = "available"
	ClickwrapEntityUseWithInboxesEnumRequire   ClickwrapEntityUseWithInboxesEnum = "require"
)

type ClickwrapEntityUseWithUsersEnum string

const (
	ClickwrapEntityUseWithUsersEnumNone    ClickwrapEntityUseWithUsersEnum = "none"
	ClickwrapEntityUseWithUsersEnumRequire ClickwrapEntityUseWithUsersEnum = "require"
)

// ClickwrapEntity
// Create Clickwrap
type ClickwrapEntity struct {
	Body           *string                            `json:"body,omitempty"`
	ID             *int32                             `json:"id,omitempty"`
	Name           *string                            `json:"name,omitempty"`
	UseWithBundles *ClickwrapEntityUseWithBundlesEnum `json:"use_with_bundles,omitempty"`
	UseWithInboxes *ClickwrapEntityUseWithInboxesEnum `json:"use_with_inboxes,omitempty"`
	UseWithUsers   *ClickwrapEntityUseWithUsersEnum   `json:"use_with_users,omitempty"`
}
