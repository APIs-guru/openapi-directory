package operations

import (
	"openapi/pkg/models/shared"
)

type SendBonusXAmzTargetEnum string

const (
	SendBonusXAmzTargetEnumMTurkRequesterServiceV20170117SendBonus SendBonusXAmzTargetEnum = "MTurkRequesterServiceV20170117.SendBonus"
)

type SendBonusHeaders struct {
	XAmzAlgorithm     *string                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        SendBonusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type SendBonusRequest struct {
	Headers SendBonusHeaders
	Request shared.SendBonusRequest `request:"mediaType=application/json"`
}

type SendBonusResponse struct {
	ContentType       string
	RequestError      *interface{}
	SendBonusResponse map[string]interface{}
	ServiceFault      *interface{}
	StatusCode        int64
}
