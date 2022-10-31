package operations



type CreateCollectionFromSchemaPathParams struct {
    APIID string `pathParam:"style=simple,explode=false,name=apiId"`
    APIVersionID string `pathParam:"style=simple,explode=false,name=apiVersionId"`
    SchemaID string `pathParam:"style=simple,explode=false,name=schemaId"`
    
}

type CreateCollectionFromSchemaQueryParams struct {
    Workspace *string `queryParam:"style=form,explode=true,name=workspace"`
    
}

type CreateCollectionFromSchemaRequestBodyRelations struct {
    Type *string `json:"type,omitempty"`
    
}

type CreateCollectionFromSchemaRequestBody struct {
    Name *string `json:"name,omitempty"`
    Relations []CreateCollectionFromSchemaRequestBodyRelations `json:"relations,omitempty"`
    
}

type CreateCollectionFromSchemaRequest struct {
    PathParams CreateCollectionFromSchemaPathParams 
    QueryParams CreateCollectionFromSchemaQueryParams 
    Request *CreateCollectionFromSchemaRequestBody `request:"mediaType=application/json"`
    
}

type CreateCollectionFromSchema200ApplicationJSONCollection struct {
    ID *string `json:"id,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}

type CreateCollectionFromSchema200ApplicationJSONRelations struct {
    ID *string `json:"id,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type CreateCollectionFromSchema200ApplicationJSON struct {
    Collection *CreateCollectionFromSchema200ApplicationJSONCollection `json:"collection,omitempty"`
    Relations []CreateCollectionFromSchema200ApplicationJSONRelations `json:"relations,omitempty"`
    
}

type CreateCollectionFromSchemaResponse struct {
    ContentType string 
    StatusCode int64 
    CreateCollectionFromSchema200ApplicationJSONObject *CreateCollectionFromSchema200ApplicationJSON 
    
}

