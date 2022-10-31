package operations




type PostModifyClusterMaintenanceActionEnum string

const (
    PostModifyClusterMaintenanceActionEnumModifyClusterMaintenance PostModifyClusterMaintenanceActionEnum = "ModifyClusterMaintenance"
)



type PostModifyClusterMaintenanceVersionEnum string

const (
    PostModifyClusterMaintenanceVersionEnumTwoThousandAndTwelve1201 PostModifyClusterMaintenanceVersionEnum = "2012-12-01"
)


type PostModifyClusterMaintenanceQueryParams struct {
    Action PostModifyClusterMaintenanceActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostModifyClusterMaintenanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostModifyClusterMaintenanceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostModifyClusterMaintenanceRequest struct {
    QueryParams PostModifyClusterMaintenanceQueryParams 
    Headers PostModifyClusterMaintenanceHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostModifyClusterMaintenanceResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

