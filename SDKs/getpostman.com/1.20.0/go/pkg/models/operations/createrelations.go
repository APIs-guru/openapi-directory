package operations

type CreateRelationsPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	APIVersionID string `pathParam:"style=simple,explode=false,name=apiVersionId"`
}

type CreateRelationsRequestBody struct {
	Contracttest  []string `json:"contracttest,omitempty"`
	Documentation []string `json:"documentation,omitempty"`
	Mock          []string `json:"mock,omitempty"`
	Testsuite     []string `json:"testsuite,omitempty"`
}

type CreateRelations200ApplicationJSON struct {
	Contracttest  []string `json:"contracttest,omitempty"`
	Documentation []string `json:"documentation,omitempty"`
	Testsuite     []string `json:"testsuite,omitempty"`
}

type CreateRelationsRequest struct {
	PathParams CreateRelationsPathParams
	Request    *CreateRelationsRequestBody `request:"mediaType=application/json"`
}

type CreateRelationsResponse struct {
	ContentType                             string
	StatusCode                              int64
	CreateRelations200ApplicationJSONObject *CreateRelations200ApplicationJSON
}
