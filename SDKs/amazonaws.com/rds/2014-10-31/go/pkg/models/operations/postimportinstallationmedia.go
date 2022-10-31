package operations




type PostImportInstallationMediaActionEnum string

const (
    PostImportInstallationMediaActionEnumImportInstallationMedia PostImportInstallationMediaActionEnum = "ImportInstallationMedia"
)



type PostImportInstallationMediaVersionEnum string

const (
    PostImportInstallationMediaVersionEnumTwoThousandAndFourteen1031 PostImportInstallationMediaVersionEnum = "2014-10-31"
)


type PostImportInstallationMediaQueryParams struct {
    Action PostImportInstallationMediaActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostImportInstallationMediaVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostImportInstallationMediaHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostImportInstallationMediaRequest struct {
    QueryParams PostImportInstallationMediaQueryParams 
    Headers PostImportInstallationMediaHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostImportInstallationMediaResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

