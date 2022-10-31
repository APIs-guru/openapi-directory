package shared




type APICoreDtoClickStreamHitDatapointInfoStatusEnum string

const (
    APICoreDtoClickStreamHitDatapointInfoStatusEnumActive APICoreDtoClickStreamHitDatapointInfoStatusEnum = "Active"
APICoreDtoClickStreamHitDatapointInfoStatusEnumPaused APICoreDtoClickStreamHitDatapointInfoStatusEnum = "Paused"
APICoreDtoClickStreamHitDatapointInfoStatusEnumAbuse APICoreDtoClickStreamHitDatapointInfoStatusEnum = "Abuse"
APICoreDtoClickStreamHitDatapointInfoStatusEnumDeleted APICoreDtoClickStreamHitDatapointInfoStatusEnum = "Deleted"
)


type APICoreDtoClickStreamHitDatapointInfo struct {
    CreationDate *string `json:"creationDate,omitempty"`
    DatapointFavourite *bool `json:"datapointFavourite,omitempty"`
    DatapointID *int64 `json:"datapointId,omitempty"`
    DatapointName *string `json:"datapointName,omitempty"`
    DatapointTitle *string `json:"datapointTitle,omitempty"`
    DatapointType *string `json:"datapointType,omitempty"`
    DestinationURL *string `json:"destinationUrl,omitempty"`
    GroupID *int64 `json:"groupId,omitempty"`
    GroupName *string `json:"groupName,omitempty"`
    IsAbTest *bool `json:"isABTest,omitempty"`
    IsPrivateShared *bool `json:"isPrivateShared,omitempty"`
    IsPublic *bool `json:"isPublic,omitempty"`
    Notes *string `json:"notes,omitempty"`
    Status *APICoreDtoClickStreamHitDatapointInfoStatusEnum `json:"status,omitempty"`
    Tags []APICoreDtoTagsTag `json:"tags,omitempty"`
    TrackingCode *string `json:"trackingCode,omitempty"`
    
}

