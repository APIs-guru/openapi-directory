package operations

type GetTestSuiteRelationsPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	APIVersionID string `pathParam:"style=simple,explode=false,name=apiVersionId"`
}

type GetTestSuiteRelationsRequest struct {
	PathParams GetTestSuiteRelationsPathParams
}

type GetTestSuiteRelations200ApplicationJSONTestsuite struct {
	CollectionID *string `json:"collectionId"`
	ID           *string `json:"id"`
	Name         *string `json:"name"`
	UpdatedAt    *string `json:"updatedAt"`
}

type GetTestSuiteRelations200ApplicationJSON struct {
	Testsuite []GetTestSuiteRelations200ApplicationJSONTestsuite `json:"testsuite"`
}

type GetTestSuiteRelationsResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	GetTestSuiteRelations200ApplicationJSONObject *GetTestSuiteRelations200ApplicationJSON
}
