package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBackupXAmzTargetEnum string

const (
	CreateBackupXAmzTargetEnumOpsWorksCmV20161101CreateBackup CreateBackupXAmzTargetEnum = "OpsWorksCM_V2016_11_01.CreateBackup"
)

type CreateBackupHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateBackupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateBackupRequest struct {
	Headers CreateBackupHeaders
	Request shared.CreateBackupRequest `request:"mediaType=application/json"`
}

type CreateBackupResponse struct {
	ContentType               string
	CreateBackupResponse      *shared.CreateBackupResponse
	InvalidStateException     *interface{}
	LimitExceededException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
