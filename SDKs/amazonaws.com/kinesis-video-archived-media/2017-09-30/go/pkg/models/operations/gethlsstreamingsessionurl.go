package operations

import (
	"openapi/pkg/models/shared"
)

type GetHlsStreamingSessionURLHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetHlsStreamingSessionURLRequestBodyContainerFormatEnum string

const (
	GetHlsStreamingSessionURLRequestBodyContainerFormatEnumFragmentedMp4 GetHlsStreamingSessionURLRequestBodyContainerFormatEnum = "FRAGMENTED_MP4"
	GetHlsStreamingSessionURLRequestBodyContainerFormatEnumMpegTs        GetHlsStreamingSessionURLRequestBodyContainerFormatEnum = "MPEG_TS"
)

type GetHlsStreamingSessionURLRequestBodyDiscontinuityModeEnum string

const (
	GetHlsStreamingSessionURLRequestBodyDiscontinuityModeEnumAlways          GetHlsStreamingSessionURLRequestBodyDiscontinuityModeEnum = "ALWAYS"
	GetHlsStreamingSessionURLRequestBodyDiscontinuityModeEnumNever           GetHlsStreamingSessionURLRequestBodyDiscontinuityModeEnum = "NEVER"
	GetHlsStreamingSessionURLRequestBodyDiscontinuityModeEnumOnDiscontinuity GetHlsStreamingSessionURLRequestBodyDiscontinuityModeEnum = "ON_DISCONTINUITY"
)

type GetHlsStreamingSessionURLRequestBodyDisplayFragmentTimestampEnum string

const (
	GetHlsStreamingSessionURLRequestBodyDisplayFragmentTimestampEnumAlways GetHlsStreamingSessionURLRequestBodyDisplayFragmentTimestampEnum = "ALWAYS"
	GetHlsStreamingSessionURLRequestBodyDisplayFragmentTimestampEnumNever  GetHlsStreamingSessionURLRequestBodyDisplayFragmentTimestampEnum = "NEVER"
)

type GetHlsStreamingSessionURLRequestBodyHlsFragmentSelector struct {
	FragmentSelectorType *shared.HlsFragmentSelectorTypeEnum `json:"FragmentSelectorType"`
	TimestampRange       *shared.HlsTimestampRange           `json:"TimestampRange"`
}

type GetHlsStreamingSessionURLRequestBodyPlaybackModeEnum string

const (
	GetHlsStreamingSessionURLRequestBodyPlaybackModeEnumLive       GetHlsStreamingSessionURLRequestBodyPlaybackModeEnum = "LIVE"
	GetHlsStreamingSessionURLRequestBodyPlaybackModeEnumLiveReplay GetHlsStreamingSessionURLRequestBodyPlaybackModeEnum = "LIVE_REPLAY"
	GetHlsStreamingSessionURLRequestBodyPlaybackModeEnumOnDemand   GetHlsStreamingSessionURLRequestBodyPlaybackModeEnum = "ON_DEMAND"
)

type GetHlsStreamingSessionURLRequestBody struct {
	ContainerFormat                 *GetHlsStreamingSessionURLRequestBodyContainerFormatEnum          `json:"ContainerFormat"`
	DiscontinuityMode               *GetHlsStreamingSessionURLRequestBodyDiscontinuityModeEnum        `json:"DiscontinuityMode"`
	DisplayFragmentTimestamp        *GetHlsStreamingSessionURLRequestBodyDisplayFragmentTimestampEnum `json:"DisplayFragmentTimestamp"`
	Expires                         *int64                                                            `json:"Expires"`
	HlsFragmentSelector             *GetHlsStreamingSessionURLRequestBodyHlsFragmentSelector          `json:"HLSFragmentSelector"`
	MaxMediaPlaylistFragmentResults *int64                                                            `json:"MaxMediaPlaylistFragmentResults"`
	PlaybackMode                    *GetHlsStreamingSessionURLRequestBodyPlaybackModeEnum             `json:"PlaybackMode"`
	StreamArn                       *string                                                           `json:"StreamARN"`
	StreamName                      *string                                                           `json:"StreamName"`
}

type GetHlsStreamingSessionURLRequest struct {
	Headers GetHlsStreamingSessionURLHeaders
	Request GetHlsStreamingSessionURLRequestBody `request:"mediaType=application/json"`
}

type GetHlsStreamingSessionURLResponse struct {
	ClientLimitExceededException        *interface{}
	ContentType                         string
	GetHlsStreamingSessionURLOutput     *shared.GetHlsStreamingSessionURLOutput
	InvalidArgumentException            *interface{}
	InvalidCodecPrivateDataException    *interface{}
	MissingCodecPrivateDataException    *interface{}
	NoDataRetentionException            *interface{}
	NotAuthorizedException              *interface{}
	ResourceNotFoundException           *interface{}
	StatusCode                          int64
	UnsupportedStreamMediaTypeException *interface{}
}
