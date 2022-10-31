package operations



type GroceryListDeleteItemByGUIDPathParams struct {
    GUID string `pathParam:"style=simple,explode=false,name=guid"`
    
}

type GroceryListDeleteItemByGUIDRequest struct {
    PathParams GroceryListDeleteItemByGUIDPathParams 
    
}

type GroceryListDeleteItemByGUIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    SystemObject map[string]interface{} 
    
}

