package operations

type GetDescribeDataSharesForProducerActionEnum string

const (
	GetDescribeDataSharesForProducerActionEnumDescribeDataSharesForProducer GetDescribeDataSharesForProducerActionEnum = "DescribeDataSharesForProducer"
)

type GetDescribeDataSharesForProducerStatusEnum string

const (
	GetDescribeDataSharesForProducerStatusEnumActive               GetDescribeDataSharesForProducerStatusEnum = "ACTIVE"
	GetDescribeDataSharesForProducerStatusEnumAuthorized           GetDescribeDataSharesForProducerStatusEnum = "AUTHORIZED"
	GetDescribeDataSharesForProducerStatusEnumPendingAuthorization GetDescribeDataSharesForProducerStatusEnum = "PENDING_AUTHORIZATION"
	GetDescribeDataSharesForProducerStatusEnumDeauthorized         GetDescribeDataSharesForProducerStatusEnum = "DEAUTHORIZED"
	GetDescribeDataSharesForProducerStatusEnumRejected             GetDescribeDataSharesForProducerStatusEnum = "REJECTED"
)

type GetDescribeDataSharesForProducerVersionEnum string

const (
	GetDescribeDataSharesForProducerVersionEnumTwoThousandAndTwelve1201 GetDescribeDataSharesForProducerVersionEnum = "2012-12-01"
)

type GetDescribeDataSharesForProducerQueryParams struct {
	Action      GetDescribeDataSharesForProducerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker      *string                                     `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords  *int64                                      `queryParam:"style=form,explode=true,name=MaxRecords"`
	ProducerArn *string                                     `queryParam:"style=form,explode=true,name=ProducerArn"`
	Status      *GetDescribeDataSharesForProducerStatusEnum `queryParam:"style=form,explode=true,name=Status"`
	Version     GetDescribeDataSharesForProducerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeDataSharesForProducerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeDataSharesForProducerRequest struct {
	QueryParams GetDescribeDataSharesForProducerQueryParams
	Headers     GetDescribeDataSharesForProducerHeaders
}

type GetDescribeDataSharesForProducerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
