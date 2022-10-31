package operations




type PostAssociateDataShareConsumerActionEnum string

const (
    PostAssociateDataShareConsumerActionEnumAssociateDataShareConsumer PostAssociateDataShareConsumerActionEnum = "AssociateDataShareConsumer"
)



type PostAssociateDataShareConsumerVersionEnum string

const (
    PostAssociateDataShareConsumerVersionEnumTwoThousandAndTwelve1201 PostAssociateDataShareConsumerVersionEnum = "2012-12-01"
)


type PostAssociateDataShareConsumerQueryParams struct {
    Action PostAssociateDataShareConsumerActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostAssociateDataShareConsumerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostAssociateDataShareConsumerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostAssociateDataShareConsumerRequest struct {
    QueryParams PostAssociateDataShareConsumerQueryParams 
    Headers PostAssociateDataShareConsumerHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostAssociateDataShareConsumerResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

