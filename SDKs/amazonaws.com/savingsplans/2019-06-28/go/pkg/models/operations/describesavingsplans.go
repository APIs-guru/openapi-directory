package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSavingsPlansHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeSavingsPlansRequestBody struct {
	Filters         []shared.SavingsPlanFilter    `json:"filters,omitempty"`
	MaxResults      *int64                        `json:"maxResults,omitempty"`
	NextToken       *string                       `json:"nextToken,omitempty"`
	SavingsPlanArns []string                      `json:"savingsPlanArns,omitempty"`
	SavingsPlanIds  []string                      `json:"savingsPlanIds,omitempty"`
	States          []shared.SavingsPlanStateEnum `json:"states,omitempty"`
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
