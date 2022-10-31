package operations




type GetDisassociateDataShareConsumerActionEnum string

const (
    GetDisassociateDataShareConsumerActionEnumDisassociateDataShareConsumer GetDisassociateDataShareConsumerActionEnum = "DisassociateDataShareConsumer"
)



type GetDisassociateDataShareConsumerVersionEnum string

const (
    GetDisassociateDataShareConsumerVersionEnumTwoThousandAndTwelve1201 GetDisassociateDataShareConsumerVersionEnum = "2012-12-01"
)


type GetDisassociateDataShareConsumerQueryParams struct {
    Action GetDisassociateDataShareConsumerActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ConsumerArn *string `queryParam:"style=form,explode=true,name=ConsumerArn"`
    DataShareArn string `queryParam:"style=form,explode=true,name=DataShareArn"`
    DisassociateEntireAccount *bool `queryParam:"style=form,explode=true,name=DisassociateEntireAccount"`
    Version GetDisassociateDataShareConsumerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDisassociateDataShareConsumerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDisassociateDataShareConsumerRequest struct {
    QueryParams GetDisassociateDataShareConsumerQueryParams 
    Headers GetDisassociateDataShareConsumerHeaders 
    
}

type GetDisassociateDataShareConsumerResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

