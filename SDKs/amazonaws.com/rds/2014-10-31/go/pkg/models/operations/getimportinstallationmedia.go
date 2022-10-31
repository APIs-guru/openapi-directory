package operations




type GetImportInstallationMediaActionEnum string

const (
    GetImportInstallationMediaActionEnumImportInstallationMedia GetImportInstallationMediaActionEnum = "ImportInstallationMedia"
)



type GetImportInstallationMediaVersionEnum string

const (
    GetImportInstallationMediaVersionEnumTwoThousandAndFourteen1031 GetImportInstallationMediaVersionEnum = "2014-10-31"
)


type GetImportInstallationMediaQueryParams struct {
    Action GetImportInstallationMediaActionEnum `queryParam:"style=form,explode=true,name=Action"`
    CustomAvailabilityZoneID string `queryParam:"style=form,explode=true,name=CustomAvailabilityZoneId"`
    Engine string `queryParam:"style=form,explode=true,name=Engine"`
    EngineInstallationMediaPath string `queryParam:"style=form,explode=true,name=EngineInstallationMediaPath"`
    EngineVersion string `queryParam:"style=form,explode=true,name=EngineVersion"`
    OsInstallationMediaPath string `queryParam:"style=form,explode=true,name=OSInstallationMediaPath"`
    Version GetImportInstallationMediaVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetImportInstallationMediaHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetImportInstallationMediaRequest struct {
    QueryParams GetImportInstallationMediaQueryParams 
    Headers GetImportInstallationMediaHeaders 
    
}

type GetImportInstallationMediaResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

