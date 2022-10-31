package operations




type PostCreateDbSecurityGroupActionEnum string

const (
    PostCreateDbSecurityGroupActionEnumCreateDbSecurityGroup PostCreateDbSecurityGroupActionEnum = "CreateDBSecurityGroup"
)



type PostCreateDbSecurityGroupVersionEnum string

const (
    PostCreateDbSecurityGroupVersionEnumTwoThousandAndThirteen0212 PostCreateDbSecurityGroupVersionEnum = "2013-02-12"
)


type PostCreateDbSecurityGroupQueryParams struct {
    Action PostCreateDbSecurityGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateDbSecurityGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateDbSecurityGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateDbSecurityGroupRequest struct {
    QueryParams PostCreateDbSecurityGroupQueryParams 
    Headers PostCreateDbSecurityGroupHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateDbSecurityGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

