package shared

import (
"time")


type NextPlaybackItemSuggestionTypeEnum string

const (
    NextPlaybackItemSuggestionTypeEnumStartWatching NextPlaybackItemSuggestionTypeEnum = "StartWatching"
NextPlaybackItemSuggestionTypeEnumContinueWatching NextPlaybackItemSuggestionTypeEnum = "ContinueWatching"
NextPlaybackItemSuggestionTypeEnumRestartWatching NextPlaybackItemSuggestionTypeEnum = "RestartWatching"
NextPlaybackItemSuggestionTypeEnumSequential NextPlaybackItemSuggestionTypeEnum = "Sequential"
NextPlaybackItemSuggestionTypeEnumNone NextPlaybackItemSuggestionTypeEnum = "None"
)


type NextPlaybackItem struct {
    FirstWatchedDate *time.Time `json:"firstWatchedDate,omitempty"`
    LastWatchedDate *time.Time `json:"lastWatchedDate,omitempty"`
    Next *ItemDetail `json:"next,omitempty"`
    SourceItemID string `json:"sourceItemId"`
    SuggestionType *NextPlaybackItemSuggestionTypeEnum `json:"suggestionType,omitempty"`
    
}

