package operations




type PostDisassociateDataShareConsumerActionEnum string

const (
    PostDisassociateDataShareConsumerActionEnumDisassociateDataShareConsumer PostDisassociateDataShareConsumerActionEnum = "DisassociateDataShareConsumer"
)



type PostDisassociateDataShareConsumerVersionEnum string

const (
    PostDisassociateDataShareConsumerVersionEnumTwoThousandAndTwelve1201 PostDisassociateDataShareConsumerVersionEnum = "2012-12-01"
)


type PostDisassociateDataShareConsumerQueryParams struct {
    Action PostDisassociateDataShareConsumerActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDisassociateDataShareConsumerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDisassociateDataShareConsumerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDisassociateDataShareConsumerRequest struct {
    QueryParams PostDisassociateDataShareConsumerQueryParams 
    Headers PostDisassociateDataShareConsumerHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDisassociateDataShareConsumerResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

