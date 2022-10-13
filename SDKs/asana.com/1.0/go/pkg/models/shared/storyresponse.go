package shared

import (
	"time"
)

type StoryResponseSourceEnum string

const (
	StoryResponseSourceEnumWeb     StoryResponseSourceEnum = "web"
	StoryResponseSourceEnumEmail   StoryResponseSourceEnum = "email"
	StoryResponseSourceEnumMobile  StoryResponseSourceEnum = "mobile"
	StoryResponseSourceEnumAPI     StoryResponseSourceEnum = "api"
	StoryResponseSourceEnumUnknown StoryResponseSourceEnum = "unknown"
)

type StoryResponseStickerNameEnum string

const (
	StoryResponseStickerNameEnumGreenCheckmark       StoryResponseStickerNameEnum = "green_checkmark"
	StoryResponseStickerNameEnumPeopleDancing        StoryResponseStickerNameEnum = "people_dancing"
	StoryResponseStickerNameEnumDancingUnicorn       StoryResponseStickerNameEnum = "dancing_unicorn"
	StoryResponseStickerNameEnumHeart                StoryResponseStickerNameEnum = "heart"
	StoryResponseStickerNameEnumPartyPopper          StoryResponseStickerNameEnum = "party_popper"
	StoryResponseStickerNameEnumPeopleWavingFlags    StoryResponseStickerNameEnum = "people_waving_flags"
	StoryResponseStickerNameEnumSplashingNarwhal     StoryResponseStickerNameEnum = "splashing_narwhal"
	StoryResponseStickerNameEnumTrophy               StoryResponseStickerNameEnum = "trophy"
	StoryResponseStickerNameEnumYetiRidingUnicorn    StoryResponseStickerNameEnum = "yeti_riding_unicorn"
	StoryResponseStickerNameEnumCelebratingPeople    StoryResponseStickerNameEnum = "celebrating_people"
	StoryResponseStickerNameEnumDeterminedClimbers   StoryResponseStickerNameEnum = "determined_climbers"
	StoryResponseStickerNameEnumPhoenixSpreadingLove StoryResponseStickerNameEnum = "phoenix_spreading_love"
)

type StoryResponse struct {
	Assignee           *UserCompact                  `json:"assignee"`
	CreatedAt          *time.Time                    `json:"created_at"`
	CreatedBy          *UserCompact                  `json:"created_by"`
	CustomField        *CustomFieldCompact           `json:"custom_field"`
	Dependency         *TaskCompact                  `json:"dependency"`
	DuplicateOf        *TaskCompact                  `json:"duplicate_of"`
	DuplicatedFrom     *TaskCompact                  `json:"duplicated_from"`
	Follower           *UserCompact                  `json:"follower"`
	Gid                *string                       `json:"gid"`
	Hearted            *bool                         `json:"hearted"`
	Hearts             []Like                        `json:"hearts"`
	HTMLText           *string                       `json:"html_text"`
	IsEdited           *bool                         `json:"is_edited"`
	IsPinned           *bool                         `json:"is_pinned"`
	Liked              *bool                         `json:"liked"`
	Likes              []Like                        `json:"likes"`
	NewApprovalStatus  *string                       `json:"new_approval_status"`
	NewDates           *StoryResponseDates           `json:"new_dates"`
	NewEnumValue       *EnumOption                   `json:"new_enum_value"`
	NewMultiEnumValues []EnumOption                  `json:"new_multi_enum_values"`
	NewName            *string                       `json:"new_name"`
	NewNumberValue     *int64                        `json:"new_number_value"`
	NewResourceSubtype *string                       `json:"new_resource_subtype"`
	NewSection         *SectionCompact               `json:"new_section"`
	NewTextValue       *string                       `json:"new_text_value"`
	NumHearts          *int64                        `json:"num_hearts"`
	NumLikes           *int64                        `json:"num_likes"`
	OldApprovalStatus  *string                       `json:"old_approval_status"`
	OldDates           *StoryResponseDates           `json:"old_dates"`
	OldEnumValue       *EnumOption                   `json:"old_enum_value"`
	OldMultiEnumValues []EnumOption                  `json:"old_multi_enum_values"`
	OldName            *string                       `json:"old_name"`
	OldNumberValue     *int64                        `json:"old_number_value"`
	OldResourceSubtype *string                       `json:"old_resource_subtype"`
	OldSection         *SectionCompact               `json:"old_section"`
	OldTextValue       *string                       `json:"old_text_value"`
	Previews           []Preview                     `json:"previews"`
	Project            *ProjectCompact               `json:"project"`
	ResourceSubtype    *string                       `json:"resource_subtype"`
	ResourceType       *string                       `json:"resource_type"`
	Source             *StoryResponseSourceEnum      `json:"source"`
	StickerName        *StoryResponseStickerNameEnum `json:"sticker_name"`
	Story              *StoryCompact                 `json:"story"`
	Tag                *TagCompact                   `json:"tag"`
	Target             *interface{}                  `json:"target"`
	Task               *TaskCompact                  `json:"task"`
	Text               *string                       `json:"text"`
}
