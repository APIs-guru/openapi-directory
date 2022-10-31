package operations




type PostRestoreDbClusterFromS3ActionEnum string

const (
    PostRestoreDbClusterFromS3ActionEnumRestoreDbClusterFromS3 PostRestoreDbClusterFromS3ActionEnum = "RestoreDBClusterFromS3"
)



type PostRestoreDbClusterFromS3VersionEnum string

const (
    PostRestoreDbClusterFromS3VersionEnumTwoThousandAndFourteen1031 PostRestoreDbClusterFromS3VersionEnum = "2014-10-31"
)


type PostRestoreDbClusterFromS3QueryParams struct {
    Action PostRestoreDbClusterFromS3ActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostRestoreDbClusterFromS3VersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostRestoreDbClusterFromS3Headers struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostRestoreDbClusterFromS3Request struct {
    QueryParams PostRestoreDbClusterFromS3QueryParams 
    Headers PostRestoreDbClusterFromS3Headers 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostRestoreDbClusterFromS3Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

