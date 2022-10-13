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

type ClickwrapEntity struct {
	Body           *string                            `json:"body"`
	ID             *int32                             `json:"id"`
	Name           *string                            `json:"name"`
	UseWithBundles *ClickwrapEntityUseWithBundlesEnum `json:"use_with_bundles"`
	UseWithInboxes *ClickwrapEntityUseWithInboxesEnum `json:"use_with_inboxes"`
	UseWithUsers   *ClickwrapEntityUseWithUsersEnum   `json:"use_with_users"`
}
