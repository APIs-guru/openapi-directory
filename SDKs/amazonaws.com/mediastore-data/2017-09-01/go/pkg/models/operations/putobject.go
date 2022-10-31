package operations

import (
	"openapi/pkg/models/shared"
)

type PutObjectPathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=Path"`
}

type PutObjectXAmzStorageClassEnum string

const (
	PutObjectXAmzStorageClassEnumTemporal PutObjectXAmzStorageClassEnum = "TEMPORAL"
)

type PutObjectXAmzUploadAvailabilityEnum string

const (
	PutObjectXAmzUploadAvailabilityEnumStandard  PutObjectXAmzUploadAvailabilityEnum = "STANDARD"
	PutObjectXAmzUploadAvailabilityEnumStreaming PutObjectXAmzUploadAvailabilityEnum = "STREAMING"
)

type PutObjectHeaders struct {
	CacheControl           *string                              `header:"style=simple,explode=false,name=Cache-Control"`
	ContentType            *string                              `header:"style=simple,explode=false,name=Content-Type"`
	XAmzAlgorithm          *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256      *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential         *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate               *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken      *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature          *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders      *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzStorageClass       *PutObjectXAmzStorageClassEnum       `header:"style=simple,explode=false,name=x-amz-storage-class"`
	XAmzUploadAvailability *PutObjectXAmzUploadAvailabilityEnum `header:"style=simple,explode=false,name=x-amz-upload-availability"`
}

type PutObjectRequestBody struct {
	Body string `json:"Body"`
}

type PutObjectRequest struct {
	PathParams PutObjectPathParams
	Headers    PutObjectHeaders
	Request    PutObjectRequestBody `request:"mediaType=application/json"`
}

type PutObjectResponse struct {
	ContainerNotFoundException *interface{}
	ContentType                string
	InternalServerError        *interface{}
	PutObjectResponse          *shared.PutObjectResponse
	StatusCode                 int64
}
