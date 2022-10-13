package operations

import (
	"openapi/pkg/models/shared"
)

type SendBonusXAmzTargetEnum string

const (
	SendBonusXAmzTargetEnumMTurkRequesterServiceV20170117SendBonus SendBonusXAmzTargetEnum = "MTurkRequesterServiceV20170117.SendBonus"
)

type SendBonusHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SendBonusXAmzTargetEnum `header:"name=X-Amz-Target"`
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
