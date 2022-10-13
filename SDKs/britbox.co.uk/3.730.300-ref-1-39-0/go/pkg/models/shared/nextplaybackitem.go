package shared

import (
	"time"
)

type NextPlaybackItemSuggestionTypeEnum string

const (
	NextPlaybackItemSuggestionTypeEnumStartWatching    NextPlaybackItemSuggestionTypeEnum = "StartWatching"
	NextPlaybackItemSuggestionTypeEnumContinueWatching NextPlaybackItemSuggestionTypeEnum = "ContinueWatching"
	NextPlaybackItemSuggestionTypeEnumRestartWatching  NextPlaybackItemSuggestionTypeEnum = "RestartWatching"
	NextPlaybackItemSuggestionTypeEnumSequential       NextPlaybackItemSuggestionTypeEnum = "Sequential"
	NextPlaybackItemSuggestionTypeEnumNone             NextPlaybackItemSuggestionTypeEnum = "None"
)

type NextPlaybackItem struct {
	FirstWatchedDate *time.Time                          `json:"firstWatchedDate"`
	LastWatchedDate  *time.Time                          `json:"lastWatchedDate"`
	Next             *ItemDetail                         `json:"next"`
	SourceItemID     string                              `json:"sourceItemId"`
	SuggestionType   *NextPlaybackItemSuggestionTypeEnum `json:"suggestionType"`
}
