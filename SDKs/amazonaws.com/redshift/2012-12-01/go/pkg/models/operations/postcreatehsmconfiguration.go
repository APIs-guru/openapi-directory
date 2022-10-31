package operations




type PostCreateHsmConfigurationActionEnum string

const (
    PostCreateHsmConfigurationActionEnumCreateHsmConfiguration PostCreateHsmConfigurationActionEnum = "CreateHsmConfiguration"
)



type PostCreateHsmConfigurationVersionEnum string

const (
    PostCreateHsmConfigurationVersionEnumTwoThousandAndTwelve1201 PostCreateHsmConfigurationVersionEnum = "2012-12-01"
)


type PostCreateHsmConfigurationQueryParams struct {
    Action PostCreateHsmConfigurationActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateHsmConfigurationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateHsmConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateHsmConfigurationRequest struct {
    QueryParams PostCreateHsmConfigurationQueryParams 
    Headers PostCreateHsmConfigurationHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateHsmConfigurationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

