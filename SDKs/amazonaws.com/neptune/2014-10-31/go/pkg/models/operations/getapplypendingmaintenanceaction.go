package operations




type GetApplyPendingMaintenanceActionActionEnum string

const (
    GetApplyPendingMaintenanceActionActionEnumApplyPendingMaintenanceAction GetApplyPendingMaintenanceActionActionEnum = "ApplyPendingMaintenanceAction"
)



type GetApplyPendingMaintenanceActionVersionEnum string

const (
    GetApplyPendingMaintenanceActionVersionEnumTwoThousandAndFourteen1031 GetApplyPendingMaintenanceActionVersionEnum = "2014-10-31"
)


type GetApplyPendingMaintenanceActionQueryParams struct {
    Action GetApplyPendingMaintenanceActionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ApplyAction string `queryParam:"style=form,explode=true,name=ApplyAction"`
    OptInType string `queryParam:"style=form,explode=true,name=OptInType"`
    ResourceIdentifier string `queryParam:"style=form,explode=true,name=ResourceIdentifier"`
    Version GetApplyPendingMaintenanceActionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetApplyPendingMaintenanceActionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetApplyPendingMaintenanceActionRequest struct {
    QueryParams GetApplyPendingMaintenanceActionQueryParams 
    Headers GetApplyPendingMaintenanceActionHeaders 
    
}

type GetApplyPendingMaintenanceActionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

