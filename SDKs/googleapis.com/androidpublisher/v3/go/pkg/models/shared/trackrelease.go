package shared

type TrackReleaseStatusEnum string

const (
	TrackReleaseStatusEnumStatusUnspecified TrackReleaseStatusEnum = "statusUnspecified"
	TrackReleaseStatusEnumDraft             TrackReleaseStatusEnum = "draft"
	TrackReleaseStatusEnumInProgress        TrackReleaseStatusEnum = "inProgress"
	TrackReleaseStatusEnumHalted            TrackReleaseStatusEnum = "halted"
	TrackReleaseStatusEnumCompleted         TrackReleaseStatusEnum = "completed"
)

// TrackRelease
// A release within a track.
type TrackRelease struct {
	CountryTargeting    *CountryTargeting       `json:"countryTargeting,omitempty"`
	InAppUpdatePriority *int32                  `json:"inAppUpdatePriority,omitempty"`
	Name                *string                 `json:"name,omitempty"`
	ReleaseNotes        []LocalizedText         `json:"releaseNotes,omitempty"`
	Status              *TrackReleaseStatusEnum `json:"status,omitempty"`
	UserFraction        *float64                `json:"userFraction,omitempty"`
	VersionCodes        []string                `json:"versionCodes,omitempty"`
}
