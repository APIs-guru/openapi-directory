package operations

import (
	"openapi/pkg/models/shared"
)

type ListLaunchPathsQueryParams struct {
	PageSize  *string `queryParam:"style=form,explode=true,name=PageSize"`
	PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
}

type ListLaunchPathsXAmzTargetEnum string

const (
	ListLaunchPathsXAmzTargetEnumAws242ServiceCatalogServiceListLaunchPaths ListLaunchPathsXAmzTargetEnum = "AWS242ServiceCatalogService.ListLaunchPaths"
)

type ListLaunchPathsHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListLaunchPathsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListLaunchPathsRequest struct {
	QueryParams ListLaunchPathsQueryParams
	Headers     ListLaunchPathsHeaders
	Request     shared.ListLaunchPathsInput `request:"mediaType=application/json"`
}

type ListLaunchPathsResponse struct {
	ContentType                string
	InvalidParametersException *interface{}
	ListLaunchPathsOutput      *shared.ListLaunchPathsOutput
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
}
