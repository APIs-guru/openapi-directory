package operations




type PostDeleteClusterSubnetGroupActionEnum string

const (
    PostDeleteClusterSubnetGroupActionEnumDeleteClusterSubnetGroup PostDeleteClusterSubnetGroupActionEnum = "DeleteClusterSubnetGroup"
)



type PostDeleteClusterSubnetGroupVersionEnum string

const (
    PostDeleteClusterSubnetGroupVersionEnumTwoThousandAndTwelve1201 PostDeleteClusterSubnetGroupVersionEnum = "2012-12-01"
)


type PostDeleteClusterSubnetGroupQueryParams struct {
    Action PostDeleteClusterSubnetGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteClusterSubnetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteClusterSubnetGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteClusterSubnetGroupRequest struct {
    QueryParams PostDeleteClusterSubnetGroupQueryParams 
    Headers PostDeleteClusterSubnetGroupHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteClusterSubnetGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

