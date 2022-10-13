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
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListSecretVersionIdsXAmzTargetEnum `header:"name=X-Amz-Target"`
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
