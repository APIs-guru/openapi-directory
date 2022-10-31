package shared

import (
"time")


type ItemDetailTypeEnum string

const (
    ItemDetailTypeEnumMovie ItemDetailTypeEnum = "movie"
ItemDetailTypeEnumShow ItemDetailTypeEnum = "show"
ItemDetailTypeEnumSeason ItemDetailTypeEnum = "season"
ItemDetailTypeEnumEpisode ItemDetailTypeEnum = "episode"
ItemDetailTypeEnumProgram ItemDetailTypeEnum = "program"
ItemDetailTypeEnumLink ItemDetailTypeEnum = "link"
ItemDetailTypeEnumTrailer ItemDetailTypeEnum = "trailer"
ItemDetailTypeEnumChannel ItemDetailTypeEnum = "channel"
ItemDetailTypeEnumCustomAsset ItemDetailTypeEnum = "customAsset"
)


type ItemDetail struct {
    AdvisoryText *string `json:"advisoryText,omitempty"`
    AvailableEpisodeCount *int32 `json:"availableEpisodeCount,omitempty"`
    AvailableSeasonCount *int32 `json:"availableSeasonCount,omitempty"`
    AverageUserRating *float64 `json:"averageUserRating,omitempty"`
    Badge *string `json:"badge,omitempty"`
    ChannelShortCode *string `json:"channelShortCode,omitempty"`
    Classification *ClassificationSummary `json:"classification,omitempty"`
    ContextualTitle *string `json:"contextualTitle,omitempty"`
    Copyright *string `json:"copyright,omitempty"`
    Credits []Credit `json:"credits,omitempty"`
    CustomFields map[string]interface{} `json:"customFields,omitempty"`
    CustomID *string `json:"customId,omitempty"`
    CustomMetadata []ItemCustomMetadata `json:"customMetadata,omitempty"`
    Description *string `json:"description,omitempty"`
    Distributor *string `json:"distributor,omitempty"`
    Duration *int32 `json:"duration,omitempty"`
    EpisodeCount *int32 `json:"episodeCount,omitempty"`
    EpisodeName *string `json:"episodeName,omitempty"`
    EpisodeNumber *int32 `json:"episodeNumber,omitempty"`
    Episodes *ItemList `json:"episodes,omitempty"`
    EventDate *time.Time `json:"eventDate,omitempty"`
    GenrePaths []string `json:"genrePaths,omitempty"`
    Genres []string `json:"genres,omitempty"`
    HasClosedCaptions *bool `json:"hasClosedCaptions,omitempty"`
    ID string `json:"id"`
    Images map[string]string `json:"images,omitempty"`
    Location *string `json:"location,omitempty"`
    Offers []Offer `json:"offers,omitempty"`
    Path string `json:"path"`
    ReleaseYear *int32 `json:"releaseYear,omitempty"`
    Scopes []string `json:"scopes,omitempty"`
    Season *ItemDetail `json:"season,omitempty"`
    SeasonID *string `json:"seasonId,omitempty"`
    SeasonNumber *int32 `json:"seasonNumber,omitempty"`
    Seasons *ItemList `json:"seasons,omitempty"`
    ShortDescription *string `json:"shortDescription,omitempty"`
    Show *ItemDetail `json:"show,omitempty"`
    ShowID *string `json:"showId,omitempty"`
    ShowTitle *string `json:"showTitle,omitempty"`
    Subtype *string `json:"subtype,omitempty"`
    Tagline *string `json:"tagline,omitempty"`
    Themes []Theme `json:"themes,omitempty"`
    Title string `json:"title"`
    TotalUserRatings *int32 `json:"totalUserRatings,omitempty"`
    Trailers []ItemSummary `json:"trailers,omitempty"`
    Type ItemDetailTypeEnum `json:"type"`
    Venue *string `json:"venue,omitempty"`
    WatchPath *string `json:"watchPath,omitempty"`
    
}

