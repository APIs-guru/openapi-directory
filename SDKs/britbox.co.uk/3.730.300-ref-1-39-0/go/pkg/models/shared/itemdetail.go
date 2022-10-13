package shared

import (
	"time"
)

type ItemDetailTypeEnum string

const (
	ItemDetailTypeEnumMovie       ItemDetailTypeEnum = "movie"
	ItemDetailTypeEnumShow        ItemDetailTypeEnum = "show"
	ItemDetailTypeEnumSeason      ItemDetailTypeEnum = "season"
	ItemDetailTypeEnumEpisode     ItemDetailTypeEnum = "episode"
	ItemDetailTypeEnumProgram     ItemDetailTypeEnum = "program"
	ItemDetailTypeEnumLink        ItemDetailTypeEnum = "link"
	ItemDetailTypeEnumTrailer     ItemDetailTypeEnum = "trailer"
	ItemDetailTypeEnumChannel     ItemDetailTypeEnum = "channel"
	ItemDetailTypeEnumCustomAsset ItemDetailTypeEnum = "customAsset"
)

type ItemDetail struct {
	AdvisoryText          *string                `json:"advisoryText"`
	AvailableEpisodeCount *int32                 `json:"availableEpisodeCount"`
	AvailableSeasonCount  *int32                 `json:"availableSeasonCount"`
	AverageUserRating     *float64               `json:"averageUserRating"`
	Badge                 *string                `json:"badge"`
	ChannelShortCode      *string                `json:"channelShortCode"`
	Classification        *ClassificationSummary `json:"classification"`
	ContextualTitle       *string                `json:"contextualTitle"`
	Copyright             *string                `json:"copyright"`
	Credits               []Credit               `json:"credits"`
	CustomFields          map[string]interface{} `json:"customFields"`
	CustomID              *string                `json:"customId"`
	CustomMetadata        []ItemCustomMetadata   `json:"customMetadata"`
	Description           *string                `json:"description"`
	Distributor           *string                `json:"distributor"`
	Duration              *int32                 `json:"duration"`
	EpisodeCount          *int32                 `json:"episodeCount"`
	EpisodeName           *string                `json:"episodeName"`
	EpisodeNumber         *int32                 `json:"episodeNumber"`
	Episodes              *ItemList              `json:"episodes"`
	EventDate             *time.Time             `json:"eventDate"`
	GenrePaths            []string               `json:"genrePaths"`
	Genres                []string               `json:"genres"`
	HasClosedCaptions     *bool                  `json:"hasClosedCaptions"`
	ID                    string                 `json:"id"`
	Images                map[string]string      `json:"images"`
	Location              *string                `json:"location"`
	Offers                []Offer                `json:"offers"`
	Path                  string                 `json:"path"`
	ReleaseYear           *int32                 `json:"releaseYear"`
	Scopes                []string               `json:"scopes"`
	Season                *ItemDetail            `json:"season"`
	SeasonID              *string                `json:"seasonId"`
	SeasonNumber          *int32                 `json:"seasonNumber"`
	Seasons               *ItemList              `json:"seasons"`
	ShortDescription      *string                `json:"shortDescription"`
	Show                  *ItemDetail            `json:"show"`
	ShowID                *string                `json:"showId"`
	ShowTitle             *string                `json:"showTitle"`
	Subtype               *string                `json:"subtype"`
	Tagline               *string                `json:"tagline"`
	Themes                []Theme                `json:"themes"`
	Title                 string                 `json:"title"`
	TotalUserRatings      *int32                 `json:"totalUserRatings"`
	Trailers              []ItemSummary          `json:"trailers"`
	Type                  ItemDetailTypeEnum     `json:"type"`
	Venue                 *string                `json:"venue"`
	WatchPath             *string                `json:"watchPath"`
}
