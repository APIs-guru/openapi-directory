package operations




type PostDeleteInstallationMediaActionEnum string

const (
    PostDeleteInstallationMediaActionEnumDeleteInstallationMedia PostDeleteInstallationMediaActionEnum = "DeleteInstallationMedia"
)



type PostDeleteInstallationMediaVersionEnum string

const (
    PostDeleteInstallationMediaVersionEnumTwoThousandAndFourteen1031 PostDeleteInstallationMediaVersionEnum = "2014-10-31"
)


type PostDeleteInstallationMediaQueryParams struct {
    Action PostDeleteInstallationMediaActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteInstallationMediaVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteInstallationMediaHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteInstallationMediaRequest struct {
    QueryParams PostDeleteInstallationMediaQueryParams 
    Headers PostDeleteInstallationMediaHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteInstallationMediaResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

