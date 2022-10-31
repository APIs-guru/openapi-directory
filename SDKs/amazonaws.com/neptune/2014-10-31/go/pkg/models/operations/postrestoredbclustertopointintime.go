package operations




type PostRestoreDbClusterToPointInTimeActionEnum string

const (
    PostRestoreDbClusterToPointInTimeActionEnumRestoreDbClusterToPointInTime PostRestoreDbClusterToPointInTimeActionEnum = "RestoreDBClusterToPointInTime"
)



type PostRestoreDbClusterToPointInTimeVersionEnum string

const (
    PostRestoreDbClusterToPointInTimeVersionEnumTwoThousandAndFourteen1031 PostRestoreDbClusterToPointInTimeVersionEnum = "2014-10-31"
)


type PostRestoreDbClusterToPointInTimeQueryParams struct {
    Action PostRestoreDbClusterToPointInTimeActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostRestoreDbClusterToPointInTimeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostRestoreDbClusterToPointInTimeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostRestoreDbClusterToPointInTimeRequest struct {
    QueryParams PostRestoreDbClusterToPointInTimeQueryParams 
    Headers PostRestoreDbClusterToPointInTimeHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostRestoreDbClusterToPointInTimeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

