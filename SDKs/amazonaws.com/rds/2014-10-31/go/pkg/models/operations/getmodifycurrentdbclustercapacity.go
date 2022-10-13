package operations

type GetModifyCurrentDbClusterCapacityActionEnum string

const (
	GetModifyCurrentDbClusterCapacityActionEnumModifyCurrentDbClusterCapacity GetModifyCurrentDbClusterCapacityActionEnum = "ModifyCurrentDBClusterCapacity"
)

type GetModifyCurrentDbClusterCapacityVersionEnum string

const (
	GetModifyCurrentDbClusterCapacityVersionEnumTwoThousandAndFourteen1031 GetModifyCurrentDbClusterCapacityVersionEnum = "2014-10-31"
)

type GetModifyCurrentDbClusterCapacityQueryParams struct {
	Action               GetModifyCurrentDbClusterCapacityActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Capacity             *int64                                       `queryParam:"style=form,explode=true,name=Capacity"`
	DbClusterIdentifier  string                                       `queryParam:"style=form,explode=true,name=DBClusterIdentifier"`
	SecondsBeforeTimeout *int64                                       `queryParam:"style=form,explode=true,name=SecondsBeforeTimeout"`
	TimeoutAction        *string                                      `queryParam:"style=form,explode=true,name=TimeoutAction"`
	Version              GetModifyCurrentDbClusterCapacityVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyCurrentDbClusterCapacityHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModifyCurrentDbClusterCapacityRequest struct {
	QueryParams GetModifyCurrentDbClusterCapacityQueryParams
	Headers     GetModifyCurrentDbClusterCapacityHeaders
}

type GetModifyCurrentDbClusterCapacityResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
