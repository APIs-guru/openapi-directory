package shared

type PlayMediaControlSchemeEnum string

const (
	PlayMediaControlSchemeEnumCustom        PlayMediaControlSchemeEnum = "custom"
	PlayMediaControlSchemeEnumOnDemand      PlayMediaControlSchemeEnum = "onDemand"
	PlayMediaControlSchemeEnumInternetRadio PlayMediaControlSchemeEnum = "internetRadio"
	PlayMediaControlSchemeEnumLiveStreaming PlayMediaControlSchemeEnum = "liveStreaming"
	PlayMediaControlSchemeEnumAudioBook     PlayMediaControlSchemeEnum = "audioBook"
	PlayMediaControlSchemeEnumPodcast       PlayMediaControlSchemeEnum = "podcast"
	PlayMediaControlSchemeEnumAdvertisement PlayMediaControlSchemeEnum = "advertisement"
)
