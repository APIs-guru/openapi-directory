package operations

import (
"openapi/pkg/models/shared")

type GetDashStreamingSessionURLHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDashStreamingSessionURLRequestBodyDashFragmentSelector struct {
    FragmentSelectorType *shared.DashFragmentSelectorTypeEnum `json:"FragmentSelectorType,omitempty"`
    TimestampRange *shared.DashTimestampRange `json:"TimestampRange,omitempty"`
    
}


type GetDashStreamingSessionURLRequestBodyDisplayFragmentNumberEnum string

const (
    GetDashStreamingSessionURLRequestBodyDisplayFragmentNumberEnumAlways GetDashStreamingSessionURLRequestBodyDisplayFragmentNumberEnum = "ALWAYS"
GetDashStreamingSessionURLRequestBodyDisplayFragmentNumberEnumNever GetDashStreamingSessionURLRequestBodyDisplayFragmentNumberEnum = "NEVER"
)



type GetDashStreamingSessionURLRequestBodyDisplayFragmentTimestampEnum string

const (
    GetDashStreamingSessionURLRequestBodyDisplayFragmentTimestampEnumAlways GetDashStreamingSessionURLRequestBodyDisplayFragmentTimestampEnum = "ALWAYS"
GetDashStreamingSessionURLRequestBodyDisplayFragmentTimestampEnumNever GetDashStreamingSessionURLRequestBodyDisplayFragmentTimestampEnum = "NEVER"
)



type GetDashStreamingSessionURLRequestBodyPlaybackModeEnum string

const (
    GetDashStreamingSessionURLRequestBodyPlaybackModeEnumLive GetDashStreamingSessionURLRequestBodyPlaybackModeEnum = "LIVE"
GetDashStreamingSessionURLRequestBodyPlaybackModeEnumLiveReplay GetDashStreamingSessionURLRequestBodyPlaybackModeEnum = "LIVE_REPLAY"
GetDashStreamingSessionURLRequestBodyPlaybackModeEnumOnDemand GetDashStreamingSessionURLRequestBodyPlaybackModeEnum = "ON_DEMAND"
)


type GetDashStreamingSessionURLRequestBody struct {
    DashFragmentSelector *GetDashStreamingSessionURLRequestBodyDashFragmentSelector `json:"DASHFragmentSelector,omitempty"`
    DisplayFragmentNumber *GetDashStreamingSessionURLRequestBodyDisplayFragmentNumberEnum `json:"DisplayFragmentNumber,omitempty"`
    DisplayFragmentTimestamp *GetDashStreamingSessionURLRequestBodyDisplayFragmentTimestampEnum `json:"DisplayFragmentTimestamp,omitempty"`
    Expires *int64 `json:"Expires,omitempty"`
    MaxManifestFragmentResults *int64 `json:"MaxManifestFragmentResults,omitempty"`
    PlaybackMode *GetDashStreamingSessionURLRequestBodyPlaybackModeEnum `json:"PlaybackMode,omitempty"`
    StreamArn *string `json:"StreamARN,omitempty"`
    StreamName *string `json:"StreamName,omitempty"`
    
}

type GetDashStreamingSessionURLRequest struct {
    Headers GetDashStreamingSessionURLHeaders 
    Request GetDashStreamingSessionURLRequestBody `request:"mediaType=application/json"`
    
}

type GetDashStreamingSessionURLResponse struct {
    ClientLimitExceededException *interface{} 
    ContentType string 
    GetDashStreamingSessionURLOutput *shared.GetDashStreamingSessionURLOutput 
    InvalidArgumentException *interface{} 
    InvalidCodecPrivateDataException *interface{} 
    MissingCodecPrivateDataException *interface{} 
    NoDataRetentionException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UnsupportedStreamMediaTypeException *interface{} 
    
}

