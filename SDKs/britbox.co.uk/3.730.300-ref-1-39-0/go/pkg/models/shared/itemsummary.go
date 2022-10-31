package shared




type ItemSummaryTypeEnum string

const (
    ItemSummaryTypeEnumMovie ItemSummaryTypeEnum = "movie"
ItemSummaryTypeEnumShow ItemSummaryTypeEnum = "show"
ItemSummaryTypeEnumSeason ItemSummaryTypeEnum = "season"
ItemSummaryTypeEnumEpisode ItemSummaryTypeEnum = "episode"
ItemSummaryTypeEnumProgram ItemSummaryTypeEnum = "program"
ItemSummaryTypeEnumLink ItemSummaryTypeEnum = "link"
ItemSummaryTypeEnumTrailer ItemSummaryTypeEnum = "trailer"
ItemSummaryTypeEnumChannel ItemSummaryTypeEnum = "channel"
ItemSummaryTypeEnumCustomAsset ItemSummaryTypeEnum = "customAsset"
)


type ItemSummary struct {
    AdvisoryText *string `json:"advisoryText,omitempty"`
    AvailableEpisodeCount *int32 `json:"availableEpisodeCount,omitempty"`
    AvailableSeasonCount *int32 `json:"availableSeasonCount,omitempty"`
    AverageUserRating *float64 `json:"averageUserRating,omitempty"`
    Badge *string `json:"badge,omitempty"`
    ChannelShortCode *string `json:"channelShortCode,omitempty"`
    Classification *ClassificationSummary `json:"classification,omitempty"`
    ContextualTitle *string `json:"contextualTitle,omitempty"`
    CustomFields map[string]interface{} `json:"customFields,omitempty"`
    CustomID *string `json:"customId,omitempty"`
    Duration *int32 `json:"duration,omitempty"`
    EpisodeCount *int32 `json:"episodeCount,omitempty"`
    EpisodeName *string `json:"episodeName,omitempty"`
    EpisodeNumber *int32 `json:"episodeNumber,omitempty"`
    Genres []string `json:"genres,omitempty"`
    HasClosedCaptions *bool `json:"hasClosedCaptions,omitempty"`
    ID string `json:"id"`
    Images map[string]string `json:"images,omitempty"`
    Offers []Offer `json:"offers,omitempty"`
    Path string `json:"path"`
    ReleaseYear *int32 `json:"releaseYear,omitempty"`
    Scopes []string `json:"scopes,omitempty"`
    SeasonID *string `json:"seasonId,omitempty"`
    SeasonNumber *int32 `json:"seasonNumber,omitempty"`
    ShortDescription *string `json:"shortDescription,omitempty"`
    ShowID *string `json:"showId,omitempty"`
    ShowTitle *string `json:"showTitle,omitempty"`
    Subtype *string `json:"subtype,omitempty"`
    Tagline *string `json:"tagline,omitempty"`
    Themes []Theme `json:"themes,omitempty"`
    Title string `json:"title"`
    Type ItemSummaryTypeEnum `json:"type"`
    WatchPath *string `json:"watchPath,omitempty"`
    
}

