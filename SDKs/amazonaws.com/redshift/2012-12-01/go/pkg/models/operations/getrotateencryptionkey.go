package operations




type GetRotateEncryptionKeyActionEnum string

const (
    GetRotateEncryptionKeyActionEnumRotateEncryptionKey GetRotateEncryptionKeyActionEnum = "RotateEncryptionKey"
)



type GetRotateEncryptionKeyVersionEnum string

const (
    GetRotateEncryptionKeyVersionEnumTwoThousandAndTwelve1201 GetRotateEncryptionKeyVersionEnum = "2012-12-01"
)


type GetRotateEncryptionKeyQueryParams struct {
    Action GetRotateEncryptionKeyActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ClusterIdentifier string `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
    Version GetRotateEncryptionKeyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetRotateEncryptionKeyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetRotateEncryptionKeyRequest struct {
    QueryParams GetRotateEncryptionKeyQueryParams 
    Headers GetRotateEncryptionKeyHeaders 
    
}

type GetRotateEncryptionKeyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

