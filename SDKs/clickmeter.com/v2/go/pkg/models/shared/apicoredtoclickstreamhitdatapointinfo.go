package shared

type APICoreDtoClickStreamHitDatapointInfoStatusEnum string

const (
	APICoreDtoClickStreamHitDatapointInfoStatusEnumActive  APICoreDtoClickStreamHitDatapointInfoStatusEnum = "Active"
	APICoreDtoClickStreamHitDatapointInfoStatusEnumPaused  APICoreDtoClickStreamHitDatapointInfoStatusEnum = "Paused"
	APICoreDtoClickStreamHitDatapointInfoStatusEnumAbuse   APICoreDtoClickStreamHitDatapointInfoStatusEnum = "Abuse"
	APICoreDtoClickStreamHitDatapointInfoStatusEnumDeleted APICoreDtoClickStreamHitDatapointInfoStatusEnum = "Deleted"
)

type APICoreDtoClickStreamHitDatapointInfo struct {
	CreationDate       *string                                          `json:"creationDate"`
	DatapointFavourite *bool                                            `json:"datapointFavourite"`
	DatapointID        *int64                                           `json:"datapointId"`
	DatapointName      *string                                          `json:"datapointName"`
	DatapointTitle     *string                                          `json:"datapointTitle"`
	DatapointType      *string                                          `json:"datapointType"`
	DestinationURL     *string                                          `json:"destinationUrl"`
	GroupID            *int64                                           `json:"groupId"`
	GroupName          *string                                          `json:"groupName"`
	IsAbTest           *bool                                            `json:"isABTest"`
	IsPrivateShared    *bool                                            `json:"isPrivateShared"`
	IsPublic           *bool                                            `json:"isPublic"`
	Notes              *string                                          `json:"notes"`
	Status             *APICoreDtoClickStreamHitDatapointInfoStatusEnum `json:"status"`
	Tags               []APICoreDtoTagsTag                              `json:"tags"`
	TrackingCode       *string                                          `json:"trackingCode"`
}
