package operations




type PostAssumeRoleActionEnum string

const (
    PostAssumeRoleActionEnumAssumeRole PostAssumeRoleActionEnum = "AssumeRole"
)



type PostAssumeRoleVersionEnum string

const (
    PostAssumeRoleVersionEnumTwoThousandAndEleven0615 PostAssumeRoleVersionEnum = "2011-06-15"
)


type PostAssumeRoleQueryParams struct {
    Action PostAssumeRoleActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostAssumeRoleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostAssumeRoleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostAssumeRoleRequest struct {
    QueryParams PostAssumeRoleQueryParams 
    Headers PostAssumeRoleHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostAssumeRoleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

