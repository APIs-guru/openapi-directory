package operations

import (
"openapi/pkg/models/shared")

type ExportBundlePathParams struct {
    BundleID string `pathParam:"style=simple,explode=false,name=bundleId"`
    
}


type ExportBundlePlatformEnum string

const (
    ExportBundlePlatformEnumOsx ExportBundlePlatformEnum = "OSX"
ExportBundlePlatformEnumWindows ExportBundlePlatformEnum = "WINDOWS"
ExportBundlePlatformEnumLinux ExportBundlePlatformEnum = "LINUX"
ExportBundlePlatformEnumObjc ExportBundlePlatformEnum = "OBJC"
ExportBundlePlatformEnumSwift ExportBundlePlatformEnum = "SWIFT"
ExportBundlePlatformEnumAndroid ExportBundlePlatformEnum = "ANDROID"
ExportBundlePlatformEnumJavascript ExportBundlePlatformEnum = "JAVASCRIPT"
)


type ExportBundleQueryParams struct {
    Platform *ExportBundlePlatformEnum `queryParam:"style=form,explode=true,name=platform"`
    ProjectID *string `queryParam:"style=form,explode=true,name=projectId"`
    
}

type ExportBundleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ExportBundleRequest struct {
    PathParams ExportBundlePathParams 
    QueryParams ExportBundleQueryParams 
    Headers ExportBundleHeaders 
    
}

type ExportBundleResponse struct {
    BadRequestException *shared.BadRequestException 
    ContentType string 
    ExportBundleResult *shared.ExportBundleResult 
    InternalFailureException *shared.InternalFailureException 
    NotFoundException *shared.NotFoundException 
    ServiceUnavailableException *shared.ServiceUnavailableException 
    StatusCode int64 
    TooManyRequestsException *shared.TooManyRequestsException 
    UnauthorizedException *shared.UnauthorizedException 
    
}

