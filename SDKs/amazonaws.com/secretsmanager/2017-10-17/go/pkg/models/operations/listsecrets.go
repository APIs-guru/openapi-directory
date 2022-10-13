package operations

import (
	"openapi/pkg/models/shared"
)

type ListSecretsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListSecretsXAmzTargetEnum string

const (
	ListSecretsXAmzTargetEnumSecretsmanagerListSecrets ListSecretsXAmzTargetEnum = "secretsmanager.ListSecrets"
)

type ListSecretsHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListSecretsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListSecretsRequest struct {
	QueryParams ListSecretsQueryParams
	Headers     ListSecretsHeaders
	Request     shared.ListSecretsRequest `request:"mediaType=application/json"`
}

type ListSecretsResponse struct {
	ContentType               string
	InternalServiceError      *interface{}
	InvalidNextTokenException *interface{}
	InvalidParameterException *interface{}
	ListSecretsResponse       *shared.ListSecretsResponse
	StatusCode                int64
}
