package operations




type GetAuthorizeDbSecurityGroupIngressActionEnum string

const (
    GetAuthorizeDbSecurityGroupIngressActionEnumAuthorizeDbSecurityGroupIngress GetAuthorizeDbSecurityGroupIngressActionEnum = "AuthorizeDBSecurityGroupIngress"
)



type GetAuthorizeDbSecurityGroupIngressVersionEnum string

const (
    GetAuthorizeDbSecurityGroupIngressVersionEnumTwoThousandAndFourteen0901 GetAuthorizeDbSecurityGroupIngressVersionEnum = "2014-09-01"
)


type GetAuthorizeDbSecurityGroupIngressQueryParams struct {
    Action GetAuthorizeDbSecurityGroupIngressActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Cidrip *string `queryParam:"style=form,explode=true,name=CIDRIP"`
    DbSecurityGroupName string `queryParam:"style=form,explode=true,name=DBSecurityGroupName"`
    Ec2SecurityGroupID *string `queryParam:"style=form,explode=true,name=EC2SecurityGroupId"`
    Ec2SecurityGroupName *string `queryParam:"style=form,explode=true,name=EC2SecurityGroupName"`
    Ec2SecurityGroupOwnerID *string `queryParam:"style=form,explode=true,name=EC2SecurityGroupOwnerId"`
    Version GetAuthorizeDbSecurityGroupIngressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetAuthorizeDbSecurityGroupIngressHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetAuthorizeDbSecurityGroupIngressRequest struct {
    QueryParams GetAuthorizeDbSecurityGroupIngressQueryParams 
    Headers GetAuthorizeDbSecurityGroupIngressHeaders 
    
}

type GetAuthorizeDbSecurityGroupIngressResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

