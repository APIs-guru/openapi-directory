package operations

import (
	"openapi/pkg/models/shared"
)

type ListSecretVersionIdsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListSecretVersionIdsXAmzTargetEnum string

const (
	ListSecretVersionIdsXAmzTargetEnumSecretsmanagerListSecretVersionIds ListSecretVersionIdsXAmzTargetEnum = "secretsmanager.ListSecretVersionIds"
)

type ListSecretVersionIdsHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListSecretVersionIdsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListSecretVersionIdsRequest struct {
	QueryParams ListSecretVersionIdsQueryParams
	Headers     ListSecretVersionIdsHeaders
	Request     shared.ListSecretVersionIdsRequest `request:"mediaType=application/json"`
}

type ListSecretVersionIdsResponse struct {
	ContentType                  string
	InternalServiceError         *interface{}
	InvalidNextTokenException    *interface{}
	InvalidParameterException    *interface{}
	ListSecretVersionIdsResponse *shared.ListSecretVersionIdsResponse
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
}
