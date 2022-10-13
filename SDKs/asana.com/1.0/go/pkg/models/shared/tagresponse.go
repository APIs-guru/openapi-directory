package shared

type TagResponseColorEnum string

const (
	TagResponseColorEnumDarkPink      TagResponseColorEnum = "dark-pink"
	TagResponseColorEnumDarkGreen     TagResponseColorEnum = "dark-green"
	TagResponseColorEnumDarkBlue      TagResponseColorEnum = "dark-blue"
	TagResponseColorEnumDarkRed       TagResponseColorEnum = "dark-red"
	TagResponseColorEnumDarkTeal      TagResponseColorEnum = "dark-teal"
	TagResponseColorEnumDarkBrown     TagResponseColorEnum = "dark-brown"
	TagResponseColorEnumDarkOrange    TagResponseColorEnum = "dark-orange"
	TagResponseColorEnumDarkPurple    TagResponseColorEnum = "dark-purple"
	TagResponseColorEnumDarkWarmGray  TagResponseColorEnum = "dark-warm-gray"
	TagResponseColorEnumLightPink     TagResponseColorEnum = "light-pink"
	TagResponseColorEnumLightGreen    TagResponseColorEnum = "light-green"
	TagResponseColorEnumLightBlue     TagResponseColorEnum = "light-blue"
	TagResponseColorEnumLightRed      TagResponseColorEnum = "light-red"
	TagResponseColorEnumLightTeal     TagResponseColorEnum = "light-teal"
	TagResponseColorEnumLightBrown    TagResponseColorEnum = "light-brown"
	TagResponseColorEnumLightOrange   TagResponseColorEnum = "light-orange"
	TagResponseColorEnumLightPurple   TagResponseColorEnum = "light-purple"
	TagResponseColorEnumLightWarmGray TagResponseColorEnum = "light-warm-gray"
)

type TagResponse struct {
	Color        *TagResponseColorEnum `json:"color"`
	Followers    []UserCompact         `json:"followers"`
	Gid          *string               `json:"gid"`
	Name         *string               `json:"name"`
	PermalinkURL *string               `json:"permalink_url"`
	ResourceType *string               `json:"resource_type"`
	Workspace    *WorkspaceCompact     `json:"workspace"`
}
