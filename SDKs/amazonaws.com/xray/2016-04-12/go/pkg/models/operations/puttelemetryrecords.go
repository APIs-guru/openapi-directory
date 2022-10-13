package operations

import (
	"openapi/pkg/models/shared"
)

type PutTelemetryRecordsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutTelemetryRecordsRequestBody struct {
	Ec2InstanceID    *string                  `json:"EC2InstanceId"`
	Hostname         *string                  `json:"Hostname"`
	ResourceArn      *string                  `json:"ResourceARN"`
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
