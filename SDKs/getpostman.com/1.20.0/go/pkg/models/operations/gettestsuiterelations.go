package operations



type GetTestSuiteRelationsPathParams struct {
    APIID string `pathParam:"style=simple,explode=false,name=apiId"`
    APIVersionID string `pathParam:"style=simple,explode=false,name=apiVersionId"`
    
}

type GetTestSuiteRelationsRequest struct {
    PathParams GetTestSuiteRelationsPathParams 
    
}

type GetTestSuiteRelations200ApplicationJSONTestsuite struct {
    CollectionID *string `json:"collectionId,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    UpdatedAt *string `json:"updatedAt,omitempty"`
    
}

type GetTestSuiteRelations200ApplicationJSON struct {
    Testsuite []GetTestSuiteRelations200ApplicationJSONTestsuite `json:"testsuite,omitempty"`
    
}

type GetTestSuiteRelationsResponse struct {
    ContentType string 
    StatusCode int64 
    GetTestSuiteRelations200ApplicationJSONObject *GetTestSuiteRelations200ApplicationJSON 
    
}

