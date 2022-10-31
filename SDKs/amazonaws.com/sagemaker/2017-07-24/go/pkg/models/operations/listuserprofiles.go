package operations

import (
	"openapi/pkg/models/shared"
)

type ListUserProfilesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListUserProfilesXAmzTargetEnum string

const (
	ListUserProfilesXAmzTargetEnumSageMakerListUserProfiles ListUserProfilesXAmzTargetEnum = "SageMaker.ListUserProfiles"
)

type ListUserProfilesHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListUserProfilesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListUserProfilesRequest struct {
	QueryParams ListUserProfilesQueryParams
	Headers     ListUserProfilesHeaders
	Request     shared.ListUserProfilesRequest `request:"mediaType=application/json"`
}

type ListUserProfilesResponse struct {
	ContentType              string
	ListUserProfilesResponse *shared.ListUserProfilesResponse
	StatusCode               int64
}
