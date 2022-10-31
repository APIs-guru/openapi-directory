package operations




type PostApplyPendingMaintenanceActionActionEnum string

const (
    PostApplyPendingMaintenanceActionActionEnumApplyPendingMaintenanceAction PostApplyPendingMaintenanceActionActionEnum = "ApplyPendingMaintenanceAction"
)



type PostApplyPendingMaintenanceActionVersionEnum string

const (
    PostApplyPendingMaintenanceActionVersionEnumTwoThousandAndFourteen1031 PostApplyPendingMaintenanceActionVersionEnum = "2014-10-31"
)


type PostApplyPendingMaintenanceActionQueryParams struct {
    Action PostApplyPendingMaintenanceActionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostApplyPendingMaintenanceActionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostApplyPendingMaintenanceActionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostApplyPendingMaintenanceActionRequest struct {
    QueryParams PostApplyPendingMaintenanceActionQueryParams 
    Headers PostApplyPendingMaintenanceActionHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostApplyPendingMaintenanceActionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

