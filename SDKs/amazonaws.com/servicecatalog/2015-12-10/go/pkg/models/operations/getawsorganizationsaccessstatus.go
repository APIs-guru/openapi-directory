package operations

import (
	"openapi/pkg/models/shared"
)

type GetAwsOrganizationsAccessStatusXAmzTargetEnum string

const (
	GetAwsOrganizationsAccessStatusXAmzTargetEnumAws242ServiceCatalogServiceGetAwsOrganizationsAccessStatus GetAwsOrganizationsAccessStatusXAmzTargetEnum = "AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus"
)

type GetAwsOrganizationsAccessStatusHeaders struct {
	XAmzAlgorithm     *string                                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAwsOrganizationsAccessStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetAwsOrganizationsAccessStatusRequest struct {
	Headers GetAwsOrganizationsAccessStatusHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type GetAwsOrganizationsAccessStatusResponse struct {
	ContentType                           string
	GetAwsOrganizationsAccessStatusOutput *shared.GetAwsOrganizationsAccessStatusOutput
	OperationNotSupportedException        *interface{}
	ResourceNotFoundException             *interface{}
	StatusCode                            int64
}
