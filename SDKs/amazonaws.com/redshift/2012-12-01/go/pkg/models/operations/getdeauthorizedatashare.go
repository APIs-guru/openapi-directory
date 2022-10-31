package operations




type GetDeauthorizeDataShareActionEnum string

const (
    GetDeauthorizeDataShareActionEnumDeauthorizeDataShare GetDeauthorizeDataShareActionEnum = "DeauthorizeDataShare"
)



type GetDeauthorizeDataShareVersionEnum string

const (
    GetDeauthorizeDataShareVersionEnumTwoThousandAndTwelve1201 GetDeauthorizeDataShareVersionEnum = "2012-12-01"
)


type GetDeauthorizeDataShareQueryParams struct {
    Action GetDeauthorizeDataShareActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ConsumerIdentifier string `queryParam:"style=form,explode=true,name=ConsumerIdentifier"`
    DataShareArn string `queryParam:"style=form,explode=true,name=DataShareArn"`
    Version GetDeauthorizeDataShareVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeauthorizeDataShareHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeauthorizeDataShareRequest struct {
    QueryParams GetDeauthorizeDataShareQueryParams 
    Headers GetDeauthorizeDataShareHeaders 
    
}

type GetDeauthorizeDataShareResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

