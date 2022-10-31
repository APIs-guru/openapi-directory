package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAuditStreamConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeAuditStreamConfigurationRequestBody struct {
	FleetArn string `json:"FleetArn"`
}

type DescribeAuditStreamConfigurationRequest struct {
	Headers DescribeAuditStreamConfigurationHeaders
	Request DescribeAuditStreamConfigurationRequestBody `request:"mediaType=application/json"`
}

type DescribeAuditStreamConfigurationResponse struct {
	ContentType                              string
	DescribeAuditStreamConfigurationResponse *shared.DescribeAuditStreamConfigurationResponse
	InternalServerErrorException             *interface{}
	InvalidRequestException                  *interface{}
	ResourceNotFoundException                *interface{}
	StatusCode                               int64
	TooManyRequestsException                 *interface{}
	UnauthorizedException                    *interface{}
}
