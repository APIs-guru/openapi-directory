package operations




type GetDeregisterDbProxyTargetsActionEnum string

const (
    GetDeregisterDbProxyTargetsActionEnumDeregisterDbProxyTargets GetDeregisterDbProxyTargetsActionEnum = "DeregisterDBProxyTargets"
)



type GetDeregisterDbProxyTargetsVersionEnum string

const (
    GetDeregisterDbProxyTargetsVersionEnumTwoThousandAndFourteen1031 GetDeregisterDbProxyTargetsVersionEnum = "2014-10-31"
)


type GetDeregisterDbProxyTargetsQueryParams struct {
    Action GetDeregisterDbProxyTargetsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DbClusterIdentifiers []string `queryParam:"style=form,explode=true,name=DBClusterIdentifiers"`
    DbInstanceIdentifiers []string `queryParam:"style=form,explode=true,name=DBInstanceIdentifiers"`
    DbProxyName string `queryParam:"style=form,explode=true,name=DBProxyName"`
    TargetGroupName *string `queryParam:"style=form,explode=true,name=TargetGroupName"`
    Version GetDeregisterDbProxyTargetsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeregisterDbProxyTargetsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeregisterDbProxyTargetsRequest struct {
    QueryParams GetDeregisterDbProxyTargetsQueryParams 
    Headers GetDeregisterDbProxyTargetsHeaders 
    
}

type GetDeregisterDbProxyTargetsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

