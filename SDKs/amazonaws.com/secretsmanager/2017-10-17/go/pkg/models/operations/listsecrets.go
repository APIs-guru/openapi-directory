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
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListSecretsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
