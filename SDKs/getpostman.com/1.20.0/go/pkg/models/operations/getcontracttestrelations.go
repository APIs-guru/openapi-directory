package operations



type GetContractTestRelationsPathParams struct {
    APIID string `pathParam:"style=simple,explode=false,name=apiId"`
    APIVersionID string `pathParam:"style=simple,explode=false,name=apiVersionId"`
    
}

type GetContractTestRelationsRequest struct {
    PathParams GetContractTestRelationsPathParams 
    
}

type GetContractTestRelations200ApplicationJSONContracttest struct {
    CollectionID *string `json:"collectionId,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    UpdatedAt *string `json:"updatedAt,omitempty"`
    
}

type GetContractTestRelations200ApplicationJSON struct {
    Contracttest []GetContractTestRelations200ApplicationJSONContracttest `json:"contracttest,omitempty"`
    
}

type GetContractTestRelationsResponse struct {
    ContentType string 
    StatusCode int64 
    GetContractTestRelations200ApplicationJSONObject *GetContractTestRelations200ApplicationJSON 
    
}

