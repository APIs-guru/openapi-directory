package operations

type CreateRelationsPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	APIVersionID string `pathParam:"style=simple,explode=false,name=apiVersionId"`
}

type CreateRelationsRequestBody struct {
	Contracttest  []string `json:"contracttest"`
	Documentation []string `json:"documentation"`
	Mock          []string `json:"mock"`
	Testsuite     []string `json:"testsuite"`
}

type CreateRelationsRequest struct {
	PathParams CreateRelationsPathParams
	Request    *CreateRelationsRequestBody `request:"mediaType=application/json"`
}

type CreateRelations200ApplicationJSON struct {
	Contracttest  []string `json:"contracttest"`
	Documentation []string `json:"documentation"`
	Testsuite     []string `json:"testsuite"`
}

type CreateRelationsResponse struct {
	ContentType                             string
	StatusCode                              int64
	CreateRelations200ApplicationJSONObject *CreateRelations200ApplicationJSON
}
