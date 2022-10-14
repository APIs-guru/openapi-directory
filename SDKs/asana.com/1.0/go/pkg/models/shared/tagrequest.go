package shared

type TagRequestColorEnum string

const (
	TagRequestColorEnumDarkPink      TagRequestColorEnum = "dark-pink"
	TagRequestColorEnumDarkGreen     TagRequestColorEnum = "dark-green"
	TagRequestColorEnumDarkBlue      TagRequestColorEnum = "dark-blue"
	TagRequestColorEnumDarkRed       TagRequestColorEnum = "dark-red"
	TagRequestColorEnumDarkTeal      TagRequestColorEnum = "dark-teal"
	TagRequestColorEnumDarkBrown     TagRequestColorEnum = "dark-brown"
	TagRequestColorEnumDarkOrange    TagRequestColorEnum = "dark-orange"
	TagRequestColorEnumDarkPurple    TagRequestColorEnum = "dark-purple"
	TagRequestColorEnumDarkWarmGray  TagRequestColorEnum = "dark-warm-gray"
	TagRequestColorEnumLightPink     TagRequestColorEnum = "light-pink"
	TagRequestColorEnumLightGreen    TagRequestColorEnum = "light-green"
	TagRequestColorEnumLightBlue     TagRequestColorEnum = "light-blue"
	TagRequestColorEnumLightRed      TagRequestColorEnum = "light-red"
	TagRequestColorEnumLightTeal     TagRequestColorEnum = "light-teal"
	TagRequestColorEnumLightBrown    TagRequestColorEnum = "light-brown"
	TagRequestColorEnumLightOrange   TagRequestColorEnum = "light-orange"
	TagRequestColorEnumLightPurple   TagRequestColorEnum = "light-purple"
	TagRequestColorEnumLightWarmGray TagRequestColorEnum = "light-warm-gray"
)

type TagRequest struct {
	Color        *TagRequestColorEnum `json:"color,omitempty"`
	Followers    []string             `json:"followers,omitempty"`
	Gid          *string              `json:"gid,omitempty"`
	Name         *string              `json:"name,omitempty"`
	ResourceType *string              `json:"resource_type,omitempty"`
	Workspace    *string              `json:"workspace,omitempty"`
}
