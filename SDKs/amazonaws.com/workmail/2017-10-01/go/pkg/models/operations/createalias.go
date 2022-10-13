package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAliasXAmzTargetEnum string

const (
	CreateAliasXAmzTargetEnumWorkMailServiceCreateAlias CreateAliasXAmzTargetEnum = "WorkMailService.CreateAlias"
)

type CreateAliasHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateAliasXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateAliasRequest struct {
	Headers CreateAliasHeaders
	Request shared.CreateAliasRequest `request:"mediaType=application/json"`
}

type CreateAliasResponse struct {
	ContentType                   string
	CreateAliasResponse           map[string]interface{}
	EmailAddressInUseException    *interface{}
	EntityNotFoundException       *interface{}
	EntityStateException          *interface{}
	InvalidParameterException     *interface{}
	LimitExceededException        *interface{}
	MailDomainNotFoundException   *interface{}
	MailDomainStateException      *interface{}
	OrganizationNotFoundException *interface{}
	OrganizationStateException    *interface{}
	StatusCode                    int64
}
