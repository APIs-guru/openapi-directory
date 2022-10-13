package operations

import (
	"openapi/pkg/models/shared"
)

type ListModelPackageGroupsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListModelPackageGroupsXAmzTargetEnum string

const (
	ListModelPackageGroupsXAmzTargetEnumSageMakerListModelPackageGroups ListModelPackageGroupsXAmzTargetEnum = "SageMaker.ListModelPackageGroups"
)

type ListModelPackageGroupsHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListModelPackageGroupsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListModelPackageGroupsRequest struct {
	QueryParams ListModelPackageGroupsQueryParams
	Headers     ListModelPackageGroupsHeaders
	Request     shared.ListModelPackageGroupsInput `request:"mediaType=application/json"`
}

type ListModelPackageGroupsResponse struct {
	ContentType                  string
	ListModelPackageGroupsOutput *shared.ListModelPackageGroupsOutput
	StatusCode                   int64
}
