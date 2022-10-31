package operations




type PostCreateDbInstanceReadReplicaActionEnum string

const (
    PostCreateDbInstanceReadReplicaActionEnumCreateDbInstanceReadReplica PostCreateDbInstanceReadReplicaActionEnum = "CreateDBInstanceReadReplica"
)



type PostCreateDbInstanceReadReplicaVersionEnum string

const (
    PostCreateDbInstanceReadReplicaVersionEnumTwoThousandAndFourteen1031 PostCreateDbInstanceReadReplicaVersionEnum = "2014-10-31"
)


type PostCreateDbInstanceReadReplicaQueryParams struct {
    Action PostCreateDbInstanceReadReplicaActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateDbInstanceReadReplicaVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateDbInstanceReadReplicaHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateDbInstanceReadReplicaRequest struct {
    QueryParams PostCreateDbInstanceReadReplicaQueryParams 
    Headers PostCreateDbInstanceReadReplicaHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateDbInstanceReadReplicaResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

