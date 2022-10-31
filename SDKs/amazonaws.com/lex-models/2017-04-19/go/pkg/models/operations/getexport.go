package operations

import (
"openapi/pkg/models/shared")


type GetExportExportTypeEnum string

const (
    GetExportExportTypeEnumAlexaSkillsKit GetExportExportTypeEnum = "ALEXA_SKILLS_KIT"
GetExportExportTypeEnumLex GetExportExportTypeEnum = "LEX"
)



type GetExportResourceTypeEnum string

const (
    GetExportResourceTypeEnumBot GetExportResourceTypeEnum = "BOT"
GetExportResourceTypeEnumIntent GetExportResourceTypeEnum = "INTENT"
GetExportResourceTypeEnumSlotType GetExportResourceTypeEnum = "SLOT_TYPE"
)


type GetExportQueryParams struct {
    ExportType GetExportExportTypeEnum `queryParam:"style=form,explode=true,name=exportType"`
    Name string `queryParam:"style=form,explode=true,name=name"`
    ResourceType GetExportResourceTypeEnum `queryParam:"style=form,explode=true,name=resourceType"`
    Version string `queryParam:"style=form,explode=true,name=version"`
    
}

type GetExportHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetExportRequest struct {
    QueryParams GetExportQueryParams 
    Headers GetExportHeaders 
    
}

type GetExportResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GetExportResponse *shared.GetExportResponse 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    
}

