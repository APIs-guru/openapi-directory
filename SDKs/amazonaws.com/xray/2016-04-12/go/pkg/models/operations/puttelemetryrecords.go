package operations

import (
	"openapi/pkg/models/shared"
)

type PutTelemetryRecordsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PutTelemetryRecordsRequestBody struct {
	Ec2InstanceID    *string                  `json:"EC2InstanceId,omitempty"`
	Hostname         *string                  `json:"Hostname,omitempty"`
	ResourceArn      *string                  `json:"ResourceARN,omitempty"`
	TelemetryRecords []shared.TelemetryRecord `json:"TelemetryRecords"`
}

type PutTelemetryRecordsRequest struct {
	Headers PutTelemetryRecordsHeaders
	Request PutTelemetryRecordsRequestBody `request:"mediaType=application/json"`
}

type PutTelemetryRecordsResponse struct {
	ContentType               string
	InvalidRequestException   *interface{}
	PutTelemetryRecordsResult map[string]interface{}
	StatusCode                int64
	ThrottledException        *interface{}
}
