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
	XAmzAlgorithm     *string                                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEffectivePatchesForPatchBaselineXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
