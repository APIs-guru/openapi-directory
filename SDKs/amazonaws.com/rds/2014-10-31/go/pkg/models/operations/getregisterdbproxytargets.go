package operations




type GetRegisterDbProxyTargetsActionEnum string

const (
    GetRegisterDbProxyTargetsActionEnumRegisterDbProxyTargets GetRegisterDbProxyTargetsActionEnum = "RegisterDBProxyTargets"
)



type GetRegisterDbProxyTargetsVersionEnum string

const (
    GetRegisterDbProxyTargetsVersionEnumTwoThousandAndFourteen1031 GetRegisterDbProxyTargetsVersionEnum = "2014-10-31"
)


type GetRegisterDbProxyTargetsQueryParams struct {
    Action GetRegisterDbProxyTargetsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DbClusterIdentifiers []string `queryParam:"style=form,explode=true,name=DBClusterIdentifiers"`
    DbInstanceIdentifiers []string `queryParam:"style=form,explode=true,name=DBInstanceIdentifiers"`
    DbProxyName string `queryParam:"style=form,explode=true,name=DBProxyName"`
    TargetGroupName *string `queryParam:"style=form,explode=true,name=TargetGroupName"`
    Version GetRegisterDbProxyTargetsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetRegisterDbProxyTargetsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetRegisterDbProxyTargetsRequest struct {
    QueryParams GetRegisterDbProxyTargetsQueryParams 
    Headers GetRegisterDbProxyTargetsHeaders 
    
}

type GetRegisterDbProxyTargetsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

