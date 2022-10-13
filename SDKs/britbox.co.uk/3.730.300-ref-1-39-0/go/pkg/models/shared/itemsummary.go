package shared

type ItemSummaryTypeEnum string

const (
	ItemSummaryTypeEnumMovie       ItemSummaryTypeEnum = "movie"
	ItemSummaryTypeEnumShow        ItemSummaryTypeEnum = "show"
	ItemSummaryTypeEnumSeason      ItemSummaryTypeEnum = "season"
	ItemSummaryTypeEnumEpisode     ItemSummaryTypeEnum = "episode"
	ItemSummaryTypeEnumProgram     ItemSummaryTypeEnum = "program"
	ItemSummaryTypeEnumLink        ItemSummaryTypeEnum = "link"
	ItemSummaryTypeEnumTrailer     ItemSummaryTypeEnum = "trailer"
	ItemSummaryTypeEnumChannel     ItemSummaryTypeEnum = "channel"
	ItemSummaryTypeEnumCustomAsset ItemSummaryTypeEnum = "customAsset"
)

type ItemSummary struct {
	AdvisoryText          *string                `json:"advisoryText"`
	AvailableEpisodeCount *int32                 `json:"availableEpisodeCount"`
	AvailableSeasonCount  *int32                 `json:"availableSeasonCount"`
	AverageUserRating     *float64               `json:"averageUserRating"`
	Badge                 *string                `json:"badge"`
	ChannelShortCode      *string                `json:"channelShortCode"`
	Classification        *ClassificationSummary `json:"classification"`
	ContextualTitle       *string                `json:"contextualTitle"`
	CustomFields          map[string]interface{} `json:"customFields"`
	CustomID              *string                `json:"customId"`
	Duration              *int32                 `json:"duration"`
	EpisodeCount          *int32                 `json:"episodeCount"`
	EpisodeName           *string                `json:"episodeName"`
	EpisodeNumber         *int32                 `json:"episodeNumber"`
	Genres                []string               `json:"genres"`
	HasClosedCaptions     *bool                  `json:"hasClosedCaptions"`
	ID                    string                 `json:"id"`
	Images                map[string]string      `json:"images"`
	Offers                []Offer                `json:"offers"`
	Path                  string                 `json:"path"`
	ReleaseYear           *int32                 `json:"releaseYear"`
	Scopes                []string               `json:"scopes"`
	SeasonID              *string                `json:"seasonId"`
	SeasonNumber          *int32                 `json:"seasonNumber"`
	ShortDescription      *string                `json:"shortDescription"`
	ShowID                *string                `json:"showId"`
	ShowTitle             *string                `json:"showTitle"`
	Subtype               *string                `json:"subtype"`
	Tagline               *string                `json:"tagline"`
	Themes                []Theme                `json:"themes"`
	Title                 string                 `json:"title"`
	Type                  ItemSummaryTypeEnum    `json:"type"`
	WatchPath             *string                `json:"watchPath"`
}
