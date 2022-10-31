package operations




type GetModifyAquaConfigurationActionEnum string

const (
    GetModifyAquaConfigurationActionEnumModifyAquaConfiguration GetModifyAquaConfigurationActionEnum = "ModifyAquaConfiguration"
)



type GetModifyAquaConfigurationAquaConfigurationStatusEnum string

const (
    GetModifyAquaConfigurationAquaConfigurationStatusEnumEnabled GetModifyAquaConfigurationAquaConfigurationStatusEnum = "enabled"
GetModifyAquaConfigurationAquaConfigurationStatusEnumDisabled GetModifyAquaConfigurationAquaConfigurationStatusEnum = "disabled"
GetModifyAquaConfigurationAquaConfigurationStatusEnumAuto GetModifyAquaConfigurationAquaConfigurationStatusEnum = "auto"
)



type GetModifyAquaConfigurationVersionEnum string

const (
    GetModifyAquaConfigurationVersionEnumTwoThousandAndTwelve1201 GetModifyAquaConfigurationVersionEnum = "2012-12-01"
)


type GetModifyAquaConfigurationQueryParams struct {
    Action GetModifyAquaConfigurationActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AquaConfigurationStatus *GetModifyAquaConfigurationAquaConfigurationStatusEnum `queryParam:"style=form,explode=true,name=AquaConfigurationStatus"`
    ClusterIdentifier string `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
    Version GetModifyAquaConfigurationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetModifyAquaConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetModifyAquaConfigurationRequest struct {
    QueryParams GetModifyAquaConfigurationQueryParams 
    Headers GetModifyAquaConfigurationHeaders 
    
}

type GetModifyAquaConfigurationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

