package operations

import (
	"openapi/pkg/models/shared"
)

type ExecuteSQLHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ExecuteSQLRequestBody struct {
	AwsSecretStoreArn      string  `json:"awsSecretStoreArn"`
	Database               *string `json:"database,omitempty"`
	DbClusterOrInstanceArn string  `json:"dbClusterOrInstanceArn"`
	Schema                 *string `json:"schema,omitempty"`
	SQLStatements          string  `json:"sqlStatements"`
}

type ExecuteSQLRequest struct {
	Headers ExecuteSQLHeaders
	Request ExecuteSQLRequestBody `request:"mediaType=application/json"`
}

type ExecuteSQLResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ExecuteSQLResponse           *shared.ExecuteSQLResponse
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	ServiceUnavailableError      *interface{}
	StatusCode                   int64
}
