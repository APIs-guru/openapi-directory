package operations

import (
"openapi/pkg/models/shared")

type CreateStreamingSessionPathParams struct {
    StudioID string `pathParam:"style=simple,explode=false,name=studioId"`
    
}

type CreateStreamingSessionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzClientToken *string `header:"style=simple,explode=false,name=X-Amz-Client-Token"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type CreateStreamingSessionRequestBodyEc2InstanceTypeEnum string

const (
    CreateStreamingSessionRequestBodyEc2InstanceTypeEnumG4dnXlarge CreateStreamingSessionRequestBodyEc2InstanceTypeEnum = "g4dn.xlarge"
CreateStreamingSessionRequestBodyEc2InstanceTypeEnumG4dn2xlarge CreateStreamingSessionRequestBodyEc2InstanceTypeEnum = "g4dn.2xlarge"
CreateStreamingSessionRequestBodyEc2InstanceTypeEnumG4dn4xlarge CreateStreamingSessionRequestBodyEc2InstanceTypeEnum = "g4dn.4xlarge"
CreateStreamingSessionRequestBodyEc2InstanceTypeEnumG4dn8xlarge CreateStreamingSessionRequestBodyEc2InstanceTypeEnum = "g4dn.8xlarge"
CreateStreamingSessionRequestBodyEc2InstanceTypeEnumG4dn12xlarge CreateStreamingSessionRequestBodyEc2InstanceTypeEnum = "g4dn.12xlarge"
CreateStreamingSessionRequestBodyEc2InstanceTypeEnumG4dn16xlarge CreateStreamingSessionRequestBodyEc2InstanceTypeEnum = "g4dn.16xlarge"
)


type CreateStreamingSessionRequestBody struct {
    Ec2InstanceType *CreateStreamingSessionRequestBodyEc2InstanceTypeEnum `json:"ec2InstanceType,omitempty"`
    LaunchProfileID *string `json:"launchProfileId,omitempty"`
    OwnedBy *string `json:"ownedBy,omitempty"`
    StreamingImageID *string `json:"streamingImageId,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

type CreateStreamingSessionRequest struct {
    PathParams CreateStreamingSessionPathParams 
    Headers CreateStreamingSessionHeaders 
    Request CreateStreamingSessionRequestBody `request:"mediaType=application/json"`
    
}

type CreateStreamingSessionResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    CreateStreamingSessionResponse *shared.CreateStreamingSessionResponse 
    InternalServerErrorException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

