package operations

import (
	"openapi/pkg/models/shared"
)

type GetAwsOrganizationsAccessStatusXAmzTargetEnum string

const (
	GetAwsOrganizationsAccessStatusXAmzTargetEnumAws242ServiceCatalogServiceGetAwsOrganizationsAccessStatus GetAwsOrganizationsAccessStatusXAmzTargetEnum = "AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus"
)

type GetAwsOrganizationsAccessStatusHeaders struct {
	XAmzAlgorithm     *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAwsOrganizationsAccessStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
