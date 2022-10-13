package shared

type TrackReleaseStatusEnum string

const (
	TrackReleaseStatusEnumStatusUnspecified TrackReleaseStatusEnum = "statusUnspecified"
	TrackReleaseStatusEnumDraft             TrackReleaseStatusEnum = "draft"
	TrackReleaseStatusEnumInProgress        TrackReleaseStatusEnum = "inProgress"
	TrackReleaseStatusEnumHalted            TrackReleaseStatusEnum = "halted"
	TrackReleaseStatusEnumCompleted         TrackReleaseStatusEnum = "completed"
)

type TrackRelease struct {
	CountryTargeting    *CountryTargeting       `json:"countryTargeting"`
	InAppUpdatePriority *int32                  `json:"inAppUpdatePriority"`
	Name                *string                 `json:"name"`
	ReleaseNotes        []LocalizedText         `json:"releaseNotes"`
	Status              *TrackReleaseStatusEnum `json:"status"`
	UserFraction        *float64                `json:"userFraction"`
	VersionCodes        []string                `json:"versionCodes"`
}
