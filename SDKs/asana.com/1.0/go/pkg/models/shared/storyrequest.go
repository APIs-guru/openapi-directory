package shared

type StoryRequestStickerNameEnum string

const (
	StoryRequestStickerNameEnumGreenCheckmark       StoryRequestStickerNameEnum = "green_checkmark"
	StoryRequestStickerNameEnumPeopleDancing        StoryRequestStickerNameEnum = "people_dancing"
	StoryRequestStickerNameEnumDancingUnicorn       StoryRequestStickerNameEnum = "dancing_unicorn"
	StoryRequestStickerNameEnumHeart                StoryRequestStickerNameEnum = "heart"
	StoryRequestStickerNameEnumPartyPopper          StoryRequestStickerNameEnum = "party_popper"
	StoryRequestStickerNameEnumPeopleWavingFlags    StoryRequestStickerNameEnum = "people_waving_flags"
	StoryRequestStickerNameEnumSplashingNarwhal     StoryRequestStickerNameEnum = "splashing_narwhal"
	StoryRequestStickerNameEnumTrophy               StoryRequestStickerNameEnum = "trophy"
	StoryRequestStickerNameEnumYetiRidingUnicorn    StoryRequestStickerNameEnum = "yeti_riding_unicorn"
	StoryRequestStickerNameEnumCelebratingPeople    StoryRequestStickerNameEnum = "celebrating_people"
	StoryRequestStickerNameEnumDeterminedClimbers   StoryRequestStickerNameEnum = "determined_climbers"
	StoryRequestStickerNameEnumPhoenixSpreadingLove StoryRequestStickerNameEnum = "phoenix_spreading_love"
)

type StoryRequestInput struct {
	HTMLText    *string                      `json:"html_text,omitempty"`
	IsPinned    *bool                        `json:"is_pinned,omitempty"`
	StickerName *StoryRequestStickerNameEnum `json:"sticker_name,omitempty"`
	Text        *string                      `json:"text,omitempty"`
}
