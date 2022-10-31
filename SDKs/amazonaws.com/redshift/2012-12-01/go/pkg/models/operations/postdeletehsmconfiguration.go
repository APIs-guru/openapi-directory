package operations




type PostDeleteHsmConfigurationActionEnum string

const (
    PostDeleteHsmConfigurationActionEnumDeleteHsmConfiguration PostDeleteHsmConfigurationActionEnum = "DeleteHsmConfiguration"
)



type PostDeleteHsmConfigurationVersionEnum string

const (
    PostDeleteHsmConfigurationVersionEnumTwoThousandAndTwelve1201 PostDeleteHsmConfigurationVersionEnum = "2012-12-01"
)


type PostDeleteHsmConfigurationQueryParams struct {
    Action PostDeleteHsmConfigurationActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteHsmConfigurationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteHsmConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteHsmConfigurationRequest struct {
    QueryParams PostDeleteHsmConfigurationQueryParams 
    Headers PostDeleteHsmConfigurationHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteHsmConfigurationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

