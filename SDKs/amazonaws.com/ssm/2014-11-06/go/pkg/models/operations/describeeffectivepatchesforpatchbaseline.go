package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEffectivePatchesForPatchBaselineQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeEffectivePatchesForPatchBaselineXAmzTargetEnum string

const (
	DescribeEffectivePatchesForPatchBaselineXAmzTargetEnumAmazonSsmDescribeEffectivePatchesForPatchBaseline DescribeEffectivePatchesForPatchBaselineXAmzTargetEnum = "AmazonSSM.DescribeEffectivePatchesForPatchBaseline"
)

type DescribeEffectivePatchesForPatchBaselineHeaders struct {
	XAmzAlgorithm     *string                                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEffectivePatchesForPatchBaselineXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeEffectivePatchesForPatchBaselineRequest struct {
	QueryParams DescribeEffectivePatchesForPatchBaselineQueryParams
	Headers     DescribeEffectivePatchesForPatchBaselineHeaders
	Request     shared.DescribeEffectivePatchesForPatchBaselineRequest `request:"mediaType=application/json"`
}

type DescribeEffectivePatchesForPatchBaselineResponse struct {
	ContentType                                    string
	DescribeEffectivePatchesForPatchBaselineResult *shared.DescribeEffectivePatchesForPatchBaselineResult
	DoesNotExistException                          *interface{}
	InternalServerError                            *interface{}
	InvalidResourceID                              *interface{}
	StatusCode                                     int64
	UnsupportedOperatingSystem                     *interface{}
}
