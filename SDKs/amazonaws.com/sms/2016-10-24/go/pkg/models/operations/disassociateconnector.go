package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateConnectorXAmzTargetEnum string

const (
	DisassociateConnectorXAmzTargetEnumAwsServerMigrationServiceV20161024DisassociateConnector DisassociateConnectorXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.DisassociateConnector"
)

type DisassociateConnectorHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateConnectorXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisassociateConnectorRequest struct {
	Headers DisassociateConnectorHeaders
	Request shared.DisassociateConnectorRequest `request:"mediaType=application/json"`
}

type DisassociateConnectorResponse struct {
	ContentType                       string
	DisassociateConnectorResponse     map[string]interface{}
	InvalidParameterException         *interface{}
	MissingRequiredParameterException *interface{}
	OperationNotPermittedException    *interface{}
	StatusCode                        int64
	UnauthorizedOperationException    *interface{}
}
