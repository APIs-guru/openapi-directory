package shared

type ResourceStatusEnum string

const (
	ResourceStatusEnumLive        ResourceStatusEnum = "live"
	ResourceStatusEnumBeta        ResourceStatusEnum = "beta"
	ResourceStatusEnumDevelopment ResourceStatusEnum = "development"
	ResourceStatusEnumUpcoming    ResourceStatusEnum = "upcoming"
	ResourceStatusEnumConsidering ResourceStatusEnum = "considering"
)
