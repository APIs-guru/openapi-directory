package operations

import (
"openapi/pkg/models/shared")

type ListLayerVersionsPathParams struct {
    LayerName string `pathParam:"style=simple,explode=false,name=LayerName"`
    
}


type ListLayerVersionsCompatibleRuntimeEnum string

const (
    ListLayerVersionsCompatibleRuntimeEnumNodejs ListLayerVersionsCompatibleRuntimeEnum = "nodejs"
ListLayerVersionsCompatibleRuntimeEnumNodejs43 ListLayerVersionsCompatibleRuntimeEnum = "nodejs4.3"
ListLayerVersionsCompatibleRuntimeEnumNodejs610 ListLayerVersionsCompatibleRuntimeEnum = "nodejs6.10"
ListLayerVersionsCompatibleRuntimeEnumNodejs810 ListLayerVersionsCompatibleRuntimeEnum = "nodejs8.10"
ListLayerVersionsCompatibleRuntimeEnumNodejs10X ListLayerVersionsCompatibleRuntimeEnum = "nodejs10.x"
ListLayerVersionsCompatibleRuntimeEnumNodejs12X ListLayerVersionsCompatibleRuntimeEnum = "nodejs12.x"
ListLayerVersionsCompatibleRuntimeEnumNodejs14X ListLayerVersionsCompatibleRuntimeEnum = "nodejs14.x"
ListLayerVersionsCompatibleRuntimeEnumJava8 ListLayerVersionsCompatibleRuntimeEnum = "java8"
ListLayerVersionsCompatibleRuntimeEnumJava8Al2 ListLayerVersionsCompatibleRuntimeEnum = "java8.al2"
ListLayerVersionsCompatibleRuntimeEnumJava11 ListLayerVersionsCompatibleRuntimeEnum = "java11"
ListLayerVersionsCompatibleRuntimeEnumPython27 ListLayerVersionsCompatibleRuntimeEnum = "python2.7"
ListLayerVersionsCompatibleRuntimeEnumPython36 ListLayerVersionsCompatibleRuntimeEnum = "python3.6"
ListLayerVersionsCompatibleRuntimeEnumPython37 ListLayerVersionsCompatibleRuntimeEnum = "python3.7"
ListLayerVersionsCompatibleRuntimeEnumPython38 ListLayerVersionsCompatibleRuntimeEnum = "python3.8"
ListLayerVersionsCompatibleRuntimeEnumPython39 ListLayerVersionsCompatibleRuntimeEnum = "python3.9"
ListLayerVersionsCompatibleRuntimeEnumDotnetcore10 ListLayerVersionsCompatibleRuntimeEnum = "dotnetcore1.0"
ListLayerVersionsCompatibleRuntimeEnumDotnetcore20 ListLayerVersionsCompatibleRuntimeEnum = "dotnetcore2.0"
ListLayerVersionsCompatibleRuntimeEnumDotnetcore21 ListLayerVersionsCompatibleRuntimeEnum = "dotnetcore2.1"
ListLayerVersionsCompatibleRuntimeEnumDotnetcore31 ListLayerVersionsCompatibleRuntimeEnum = "dotnetcore3.1"
ListLayerVersionsCompatibleRuntimeEnumNodejs43Edge ListLayerVersionsCompatibleRuntimeEnum = "nodejs4.3-edge"
ListLayerVersionsCompatibleRuntimeEnumGo1X ListLayerVersionsCompatibleRuntimeEnum = "go1.x"
ListLayerVersionsCompatibleRuntimeEnumRuby25 ListLayerVersionsCompatibleRuntimeEnum = "ruby2.5"
ListLayerVersionsCompatibleRuntimeEnumRuby27 ListLayerVersionsCompatibleRuntimeEnum = "ruby2.7"
ListLayerVersionsCompatibleRuntimeEnumProvided ListLayerVersionsCompatibleRuntimeEnum = "provided"
ListLayerVersionsCompatibleRuntimeEnumProvidedAl2 ListLayerVersionsCompatibleRuntimeEnum = "provided.al2"
)


type ListLayerVersionsQueryParams struct {
    CompatibleRuntime *ListLayerVersionsCompatibleRuntimeEnum `queryParam:"style=form,explode=true,name=CompatibleRuntime"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *int64 `queryParam:"style=form,explode=true,name=MaxItems"`
    
}

type ListLayerVersionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListLayerVersionsRequest struct {
    PathParams ListLayerVersionsPathParams 
    QueryParams ListLayerVersionsQueryParams 
    Headers ListLayerVersionsHeaders 
    
}

type ListLayerVersionsResponse struct {
    ContentType string 
    InvalidParameterValueException *interface{} 
    ListLayerVersionsResponse *shared.ListLayerVersionsResponse 
    ResourceNotFoundException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

