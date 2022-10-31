package operations



type Destiny2GetDestinyEntityDefinitionPathParams struct {
    EntityType string `pathParam:"style=simple,explode=false,name=entityType"`
    HashIdentifier int64 `pathParam:"style=simple,explode=false,name=hashIdentifier"`
    
}

type Destiny2GetDestinyEntityDefinitionRequest struct {
    PathParams Destiny2GetDestinyEntityDefinitionPathParams 
    
}

type Destiny2GetDestinyEntityDefinitionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

