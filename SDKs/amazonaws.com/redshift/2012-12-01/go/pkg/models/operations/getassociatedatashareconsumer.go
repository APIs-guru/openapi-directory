package operations

type GetAssociateDataShareConsumerActionEnum string

const (
	GetAssociateDataShareConsumerActionEnumAssociateDataShareConsumer GetAssociateDataShareConsumerActionEnum = "AssociateDataShareConsumer"
)

type GetAssociateDataShareConsumerVersionEnum string

const (
	GetAssociateDataShareConsumerVersionEnumTwoThousandAndTwelve1201 GetAssociateDataShareConsumerVersionEnum = "2012-12-01"
)

type GetAssociateDataShareConsumerQueryParams struct {
	Action                 GetAssociateDataShareConsumerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AssociateEntireAccount *bool                                    `queryParam:"style=form,explode=true,name=AssociateEntireAccount"`
	ConsumerArn            *string                                  `queryParam:"style=form,explode=true,name=ConsumerArn"`
	DataShareArn           string                                   `queryParam:"style=form,explode=true,name=DataShareArn"`
	Version                GetAssociateDataShareConsumerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetAssociateDataShareConsumerHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetAssociateDataShareConsumerRequest struct {
	QueryParams GetAssociateDataShareConsumerQueryParams
	Headers     GetAssociateDataShareConsumerHeaders
}

type GetAssociateDataShareConsumerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
