package operations

import (
	"openapi/pkg/models/shared"
)

type ListServiceActionsQueryParams struct {
	PageSize  *string `queryParam:"style=form,explode=true,name=PageSize"`
	PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
}

type ListServiceActionsXAmzTargetEnum string

const (
	ListServiceActionsXAmzTargetEnumAws242ServiceCatalogServiceListServiceActions ListServiceActionsXAmzTargetEnum = "AWS242ServiceCatalogService.ListServiceActions"
)

type ListServiceActionsHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListServiceActionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListServiceActionsRequest struct {
	QueryParams ListServiceActionsQueryParams
	Headers     ListServiceActionsHeaders
	Request     shared.ListServiceActionsInput `request:"mediaType=application/json"`
}

type ListServiceActionsResponse struct {
	ContentType                string
	InvalidParametersException *interface{}
	ListServiceActionsOutput   *shared.ListServiceActionsOutput
	StatusCode                 int64
}
