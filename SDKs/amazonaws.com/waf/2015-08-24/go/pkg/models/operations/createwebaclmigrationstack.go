package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWebACLMigrationStackXAmzTargetEnum string

const (
	CreateWebACLMigrationStackXAmzTargetEnumAwswaf20150824CreateWebACLMigrationStack CreateWebACLMigrationStackXAmzTargetEnum = "AWSWAF_20150824.CreateWebACLMigrationStack"
)

type CreateWebACLMigrationStackHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateWebACLMigrationStackXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateWebACLMigrationStackRequest struct {
	Headers CreateWebACLMigrationStackHeaders
	Request shared.CreateWebACLMigrationStackRequest `request:"mediaType=application/json"`
}

type CreateWebACLMigrationStackResponse struct {
	ContentType                        string
	CreateWebACLMigrationStackResponse *shared.CreateWebACLMigrationStackResponse
	StatusCode                         int64
	WafEntityMigrationException        *interface{}
	WafInternalErrorException          *interface{}
	WafInvalidOperationException       *interface{}
	WafInvalidParameterException       *interface{}
	WafNonexistentItemException        *interface{}
}
