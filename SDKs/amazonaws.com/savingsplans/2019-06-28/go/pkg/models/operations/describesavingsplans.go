package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSavingsPlansHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeSavingsPlansRequestBody struct {
	Filters         []shared.SavingsPlanFilter    `json:"filters"`
	MaxResults      *int64                        `json:"maxResults"`
	NextToken       *string                       `json:"nextToken"`
	SavingsPlanArns []string                      `json:"savingsPlanArns"`
	SavingsPlanIds  []string                      `json:"savingsPlanIds"`
	States          []shared.SavingsPlanStateEnum `json:"states"`
}

type DescribeSavingsPlansRequest struct {
	Headers DescribeSavingsPlansHeaders
	Request DescribeSavingsPlansRequestBody `request:"mediaType=application/json"`
}

type DescribeSavingsPlansResponse struct {
	ContentType                  string
	DescribeSavingsPlansResponse *shared.DescribeSavingsPlansResponse
	InternalServerException      *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
