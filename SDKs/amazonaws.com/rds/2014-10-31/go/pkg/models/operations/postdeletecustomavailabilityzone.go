package operations




type PostDeleteCustomAvailabilityZoneActionEnum string

const (
    PostDeleteCustomAvailabilityZoneActionEnumDeleteCustomAvailabilityZone PostDeleteCustomAvailabilityZoneActionEnum = "DeleteCustomAvailabilityZone"
)



type PostDeleteCustomAvailabilityZoneVersionEnum string

const (
    PostDeleteCustomAvailabilityZoneVersionEnumTwoThousandAndFourteen1031 PostDeleteCustomAvailabilityZoneVersionEnum = "2014-10-31"
)


type PostDeleteCustomAvailabilityZoneQueryParams struct {
    Action PostDeleteCustomAvailabilityZoneActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteCustomAvailabilityZoneVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteCustomAvailabilityZoneHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteCustomAvailabilityZoneRequest struct {
    QueryParams PostDeleteCustomAvailabilityZoneQueryParams 
    Headers PostDeleteCustomAvailabilityZoneHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteCustomAvailabilityZoneResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

