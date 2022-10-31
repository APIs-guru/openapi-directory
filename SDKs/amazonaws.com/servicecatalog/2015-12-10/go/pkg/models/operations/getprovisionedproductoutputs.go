package operations

import (
	"openapi/pkg/models/shared"
)

type GetProvisionedProductOutputsQueryParams struct {
	PageSize  *string `queryParam:"style=form,explode=true,name=PageSize"`
	PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
}

type GetProvisionedProductOutputsXAmzTargetEnum string

const (
	GetProvisionedProductOutputsXAmzTargetEnumAws242ServiceCatalogServiceGetProvisionedProductOutputs GetProvisionedProductOutputsXAmzTargetEnum = "AWS242ServiceCatalogService.GetProvisionedProductOutputs"
)

type GetProvisionedProductOutputsHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetProvisionedProductOutputsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetProvisionedProductOutputsRequest struct {
	QueryParams GetProvisionedProductOutputsQueryParams
	Headers     GetProvisionedProductOutputsHeaders
	Request     shared.GetProvisionedProductOutputsInput `request:"mediaType=application/json"`
}

type GetProvisionedProductOutputsResponse struct {
	ContentType                        string
	GetProvisionedProductOutputsOutput *shared.GetProvisionedProductOutputsOutput
	InvalidParametersException         *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
}
