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
	Assignee           *UserCompact                  `json:"assignee,omitempty"`
	CreatedAt          *time.Time                    `json:"created_at,omitempty"`
	CreatedBy          *UserCompact                  `json:"created_by,omitempty"`
	CustomField        *CustomFieldCompact           `json:"custom_field,omitempty"`
	Dependency         *TaskCompact                  `json:"dependency,omitempty"`
	DuplicateOf        *TaskCompact                  `json:"duplicate_of,omitempty"`
	DuplicatedFrom     *TaskCompact                  `json:"duplicated_from,omitempty"`
	Follower           *UserCompact                  `json:"follower,omitempty"`
	Gid                *string                       `json:"gid,omitempty"`
	Hearted            *bool                         `json:"hearted,omitempty"`
	Hearts             []Like                        `json:"hearts,omitempty"`
	HTMLText           *string                       `json:"html_text,omitempty"`
	IsEdited           *bool                         `json:"is_edited,omitempty"`
	IsPinned           *bool                         `json:"is_pinned,omitempty"`
	Liked              *bool                         `json:"liked,omitempty"`
	Likes              []Like                        `json:"likes,omitempty"`
	NewApprovalStatus  *string                       `json:"new_approval_status,omitempty"`
	NewDates           *StoryResponseDates           `json:"new_dates,omitempty"`
	NewEnumValue       *EnumOption                   `json:"new_enum_value,omitempty"`
	NewMultiEnumValues []EnumOption                  `json:"new_multi_enum_values,omitempty"`
	NewName            *string                       `json:"new_name,omitempty"`
	NewNumberValue     *int64                        `json:"new_number_value,omitempty"`
	NewResourceSubtype *string                       `json:"new_resource_subtype,omitempty"`
	NewSection         *SectionCompact               `json:"new_section,omitempty"`
	NewTextValue       *string                       `json:"new_text_value,omitempty"`
	NumHearts          *int64                        `json:"num_hearts,omitempty"`
	NumLikes           *int64                        `json:"num_likes,omitempty"`
	OldApprovalStatus  *string                       `json:"old_approval_status,omitempty"`
	OldDates           *StoryResponseDates           `json:"old_dates,omitempty"`
	OldEnumValue       *EnumOption                   `json:"old_enum_value,omitempty"`
	OldMultiEnumValues []EnumOption                  `json:"old_multi_enum_values,omitempty"`
	OldName            *string                       `json:"old_name,omitempty"`
	OldNumberValue     *int64                        `json:"old_number_value,omitempty"`
	OldResourceSubtype *string                       `json:"old_resource_subtype,omitempty"`
	OldSection         *SectionCompact               `json:"old_section,omitempty"`
	OldTextValue       *string                       `json:"old_text_value,omitempty"`
	Previews           []Preview                     `json:"previews,omitempty"`
	Project            *ProjectCompact               `json:"project,omitempty"`
	ResourceSubtype    *string                       `json:"resource_subtype,omitempty"`
	ResourceType       *string                       `json:"resource_type,omitempty"`
	Source             *StoryResponseSourceEnum      `json:"source,omitempty"`
	StickerName        *StoryResponseStickerNameEnum `json:"sticker_name,omitempty"`
	Story              *StoryCompact                 `json:"story,omitempty"`
	Tag                *TagCompact                   `json:"tag,omitempty"`
	Target             *interface{}                  `json:"target,omitempty"`
	Task               *TaskCompact                  `json:"task,omitempty"`
	Text               *string                       `json:"text,omitempty"`
}
