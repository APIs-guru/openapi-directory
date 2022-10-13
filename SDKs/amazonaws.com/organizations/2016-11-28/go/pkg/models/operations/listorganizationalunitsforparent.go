package operations

import (
	"openapi/pkg/models/shared"
)

type ListOrganizationalUnitsForParentQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListOrganizationalUnitsForParentXAmzTargetEnum string

const (
	ListOrganizationalUnitsForParentXAmzTargetEnumAwsOrganizationsV20161128ListOrganizationalUnitsForParent ListOrganizationalUnitsForParentXAmzTargetEnum = "AWSOrganizationsV20161128.ListOrganizationalUnitsForParent"
)

type ListOrganizationalUnitsForParentHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListOrganizationalUnitsForParentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListOrganizationalUnitsForParentRequest struct {
	QueryParams ListOrganizationalUnitsForParentQueryParams
	Headers     ListOrganizationalUnitsForParentHeaders
	Request     shared.ListOrganizationalUnitsForParentRequest `request:"mediaType=application/json"`
}

type ListOrganizationalUnitsForParentResponse struct {
	AwsOrganizationsNotInUseException        *interface{}
	AccessDeniedException                    *interface{}
	ContentType                              string
	InvalidInputException                    *interface{}
	ListOrganizationalUnitsForParentResponse *shared.ListOrganizationalUnitsForParentResponse
	ParentNotFoundException                  *interface{}
	ServiceException                         *interface{}
	StatusCode                               int64
	TooManyRequestsException                 *interface{}
}
