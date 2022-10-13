package operations

import (
	"openapi/pkg/models/shared"
)

type CreateStreamingSessionPathParams struct {
	StudioID string `pathParam:"style=simple,explode=false,name=studioId"`
}

type CreateStreamingSessionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzClientToken   *string `header:"name=X-Amz-Client-Token"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateStreamingSessionRequestBodyEc2InstanceTypeEnum string

const (
	CreateStreamingSessionRequestBodyEc2InstanceTypeEnumG4dnXlarge   CreateStreamingSessionRequestBodyEc2InstanceTypeEnum = "g4dn.xlarge"
	CreateStreamingSessionRequestBodyEc2InstanceTypeEnumG4dn2xlarge  CreateStreamingSessionRequestBodyEc2InstanceTypeEnum = "g4dn.2xlarge"
	CreateStreamingSessionRequestBodyEc2InstanceTypeEnumG4dn4xlarge  CreateStreamingSessionRequestBodyEc2InstanceTypeEnum = "g4dn.4xlarge"
	CreateStreamingSessionRequestBodyEc2InstanceTypeEnumG4dn8xlarge  CreateStreamingSessionRequestBodyEc2InstanceTypeEnum = "g4dn.8xlarge"
	CreateStreamingSessionRequestBodyEc2InstanceTypeEnumG4dn12xlarge CreateStreamingSessionRequestBodyEc2InstanceTypeEnum = "g4dn.12xlarge"
	CreateStreamingSessionRequestBodyEc2InstanceTypeEnumG4dn16xlarge CreateStreamingSessionRequestBodyEc2InstanceTypeEnum = "g4dn.16xlarge"
)

type CreateStreamingSessionRequestBody struct {
	Ec2InstanceType  *CreateStreamingSessionRequestBodyEc2InstanceTypeEnum `json:"ec2InstanceType"`
	LaunchProfileID  *string                                               `json:"launchProfileId"`
	OwnedBy          *string                                               `json:"ownedBy"`
	StreamingImageID *string                                               `json:"streamingImageId"`
	Tags             map[string]string                                     `json:"tags"`
}

type CreateStreamingSessionRequest struct {
	PathParams CreateStreamingSessionPathParams
	Headers    CreateStreamingSessionHeaders
	Request    CreateStreamingSessionRequestBody `request:"mediaType=application/json"`
}

type CreateStreamingSessionResponse struct {
	AccessDeniedException          *interface{}
	ConflictException              *interface{}
	ContentType                    string
	CreateStreamingSessionResponse *shared.CreateStreamingSessionResponse
	InternalServerErrorException   *interface{}
	ResourceNotFoundException      *interface{}
	ServiceQuotaExceededException  *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	ValidationException            *interface{}
}
