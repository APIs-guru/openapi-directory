package operations

type GetLinkedRelationsPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	APIVersionID string `pathParam:"style=simple,explode=false,name=apiVersionId"`
}

type GetLinkedRelationsRequest struct {
	PathParams GetLinkedRelationsPathParams
}

type GetLinkedRelations200ApplicationJSONRelationsContracttest2a9b8fa888b74b8683728e3f6f6e07f2 struct {
	ID        *string `json:"id"`
	Name      *string `json:"name"`
	UpdatedAt *string `json:"updatedAt"`
}

type GetLinkedRelations200ApplicationJSONRelationsContracttest struct {
	Twoa9b8fa888b74b8683728e3f6f6e07f2 *GetLinkedRelations200ApplicationJSONRelationsContracttest2a9b8fa888b74b8683728e3f6f6e07f2 `json:"2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2"`
}

type GetLinkedRelations200ApplicationJSONRelationsIntegrationtest521b0486Ab914d3a918943c9380a0533 struct {
	ID        *string `json:"id"`
	Name      *string `json:"name"`
	UpdatedAt *string `json:"updatedAt"`
}

type GetLinkedRelations200ApplicationJSONRelationsIntegrationtestA236b715E682460b97b6C1db24f7612e struct {
	ID        *string `json:"id"`
	Name      *string `json:"name"`
	UpdatedAt *string `json:"updatedAt"`
}

type GetLinkedRelations200ApplicationJSONRelationsIntegrationtest struct {
	FiveHundredAndTwentyOneb0486Ab914d3a918943c9380a0533 *GetLinkedRelations200ApplicationJSONRelationsIntegrationtest521b0486Ab914d3a918943c9380a0533 `json:"521b0486-ab91-4d3a-9189-43c9380a0533"`
	A236b715E682460b97b6C1db24f7612e                     *GetLinkedRelations200ApplicationJSONRelationsIntegrationtestA236b715E682460b97b6C1db24f7612e `json:"a236b715-e682-460b-97b6-c1db24f7612e"`
}

type GetLinkedRelations200ApplicationJSONRelationsMock4ccd755f2c80481bA26249b55e12f5e1 struct {
	ID        *string `json:"id"`
	Name      *string `json:"name"`
	UpdatedAt *string `json:"updatedAt"`
	URL       *string `json:"url"`
}

type GetLinkedRelations200ApplicationJSONRelationsMock struct {
	Fourccd755f2c80481bA26249b55e12f5e1 *GetLinkedRelations200ApplicationJSONRelationsMock4ccd755f2c80481bA26249b55e12f5e1 `json:"4ccd755f-2c80-481b-a262-49b55e12f5e1"`
}

type GetLinkedRelations200ApplicationJSONRelations struct {
	Contracttest    *GetLinkedRelations200ApplicationJSONRelationsContracttest    `json:"contracttest"`
	Integrationtest *GetLinkedRelations200ApplicationJSONRelationsIntegrationtest `json:"integrationtest"`
	Mock            *GetLinkedRelations200ApplicationJSONRelationsMock            `json:"mock"`
}

type GetLinkedRelations200ApplicationJSON struct {
	Relations *GetLinkedRelations200ApplicationJSONRelations `json:"relations"`
}

type GetLinkedRelationsResponse struct {
	ContentType                                string
	StatusCode                                 int64
	GetLinkedRelations200ApplicationJSONObject *GetLinkedRelations200ApplicationJSON
}
