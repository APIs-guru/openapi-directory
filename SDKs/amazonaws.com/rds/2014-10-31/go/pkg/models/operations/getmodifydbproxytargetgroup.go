package operations

type GetModifyDbProxyTargetGroupActionEnum string

const (
	GetModifyDbProxyTargetGroupActionEnumModifyDbProxyTargetGroup GetModifyDbProxyTargetGroupActionEnum = "ModifyDBProxyTargetGroup"
)

type GetModifyDbProxyTargetGroupConnectionPoolConfig struct {
	ConnectionBorrowTimeout   *int64   `queryParam:"name=ConnectionBorrowTimeout"`
	InitQuery                 *string  `queryParam:"name=InitQuery"`
	MaxConnectionsPercent     *int64   `queryParam:"name=MaxConnectionsPercent"`
	MaxIdleConnectionsPercent *int64   `queryParam:"name=MaxIdleConnectionsPercent"`
	SessionPinningFilters     []string `queryParam:"name=SessionPinningFilters"`
}

type GetModifyDbProxyTargetGroupVersionEnum string

const (
	GetModifyDbProxyTargetGroupVersionEnumTwoThousandAndFourteen1031 GetModifyDbProxyTargetGroupVersionEnum = "2014-10-31"
)

type GetModifyDbProxyTargetGroupQueryParams struct {
	Action               GetModifyDbProxyTargetGroupActionEnum            `queryParam:"style=form,explode=true,name=Action"`
	ConnectionPoolConfig *GetModifyDbProxyTargetGroupConnectionPoolConfig `queryParam:"style=form,explode=true,name=ConnectionPoolConfig"`
	DbProxyName          string                                           `queryParam:"style=form,explode=true,name=DBProxyName"`
	NewName              *string                                          `queryParam:"style=form,explode=true,name=NewName"`
	TargetGroupName      string                                           `queryParam:"style=form,explode=true,name=TargetGroupName"`
	Version              GetModifyDbProxyTargetGroupVersionEnum           `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyDbProxyTargetGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModifyDbProxyTargetGroupRequest struct {
	QueryParams GetModifyDbProxyTargetGroupQueryParams
	Headers     GetModifyDbProxyTargetGroupHeaders
}

type GetModifyDbProxyTargetGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
