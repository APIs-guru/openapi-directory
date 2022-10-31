package shared




type ResourceStatusEnum string

const (
    ResourceStatusEnumAvailable ResourceStatusEnum = "AVAILABLE"
ResourceStatusEnumZonalResourceInaccessible ResourceStatusEnum = "ZONAL_RESOURCE_INACCESSIBLE"
ResourceStatusEnumLimitExceeded ResourceStatusEnum = "LIMIT_EXCEEDED"
ResourceStatusEnumUnavailable ResourceStatusEnum = "UNAVAILABLE"
ResourceStatusEnumPending ResourceStatusEnum = "PENDING"
)


