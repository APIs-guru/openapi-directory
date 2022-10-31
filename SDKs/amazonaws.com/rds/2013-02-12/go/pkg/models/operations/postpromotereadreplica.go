package operations




type PostPromoteReadReplicaActionEnum string

const (
    PostPromoteReadReplicaActionEnumPromoteReadReplica PostPromoteReadReplicaActionEnum = "PromoteReadReplica"
)



type PostPromoteReadReplicaVersionEnum string

const (
    PostPromoteReadReplicaVersionEnumTwoThousandAndThirteen0212 PostPromoteReadReplicaVersionEnum = "2013-02-12"
)


type PostPromoteReadReplicaQueryParams struct {
    Action PostPromoteReadReplicaActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostPromoteReadReplicaVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostPromoteReadReplicaHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostPromoteReadReplicaRequest struct {
    QueryParams PostPromoteReadReplicaQueryParams 
    Headers PostPromoteReadReplicaHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostPromoteReadReplicaResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

