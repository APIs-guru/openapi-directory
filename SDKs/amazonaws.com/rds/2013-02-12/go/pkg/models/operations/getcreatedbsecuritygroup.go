package operations

type GetCreateDbSecurityGroupActionEnum string

const (
	GetCreateDbSecurityGroupActionEnumCreateDbSecurityGroup GetCreateDbSecurityGroupActionEnum = "CreateDBSecurityGroup"
)

type GetCreateDbSecurityGroupVersionEnum string

const (
	GetCreateDbSecurityGroupVersionEnumTwoThousandAndThirteen0212 GetCreateDbSecurityGroupVersionEnum = "2013-02-12"
)

type GetCreateDbSecurityGroupQueryParams struct {
	Action                     GetCreateDbSecurityGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbSecurityGroupDescription string                              `queryParam:"style=form,explode=true,name=DBSecurityGroupDescription"`
	DbSecurityGroupName        string                              `queryParam:"style=form,explode=true,name=DBSecurityGroupName"`
	Version                    GetCreateDbSecurityGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateDbSecurityGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCreateDbSecurityGroupRequest struct {
	QueryParams GetCreateDbSecurityGroupQueryParams
	Headers     GetCreateDbSecurityGroupHeaders
}

type GetCreateDbSecurityGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
