package operations

type GetDeleteDbSecurityGroupActionEnum string

const (
	GetDeleteDbSecurityGroupActionEnumDeleteDbSecurityGroup GetDeleteDbSecurityGroupActionEnum = "DeleteDBSecurityGroup"
)

type GetDeleteDbSecurityGroupVersionEnum string

const (
	GetDeleteDbSecurityGroupVersionEnumTwoThousandAndFourteen0901 GetDeleteDbSecurityGroupVersionEnum = "2014-09-01"
)

type GetDeleteDbSecurityGroupQueryParams struct {
	Action              GetDeleteDbSecurityGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbSecurityGroupName string                              `queryParam:"style=form,explode=true,name=DBSecurityGroupName"`
	Version             GetDeleteDbSecurityGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteDbSecurityGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteDbSecurityGroupRequest struct {
	QueryParams GetDeleteDbSecurityGroupQueryParams
	Headers     GetDeleteDbSecurityGroupHeaders
}

type GetDeleteDbSecurityGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
