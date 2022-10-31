package operations




type PostUpdatePartnerStatusActionEnum string

const (
    PostUpdatePartnerStatusActionEnumUpdatePartnerStatus PostUpdatePartnerStatusActionEnum = "UpdatePartnerStatus"
)



type PostUpdatePartnerStatusVersionEnum string

const (
    PostUpdatePartnerStatusVersionEnumTwoThousandAndTwelve1201 PostUpdatePartnerStatusVersionEnum = "2012-12-01"
)


type PostUpdatePartnerStatusQueryParams struct {
    Action PostUpdatePartnerStatusActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostUpdatePartnerStatusVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostUpdatePartnerStatusHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostUpdatePartnerStatusRequest struct {
    QueryParams PostUpdatePartnerStatusQueryParams 
    Headers PostUpdatePartnerStatusHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostUpdatePartnerStatusResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

