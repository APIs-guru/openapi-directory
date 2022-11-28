package operations

import (
	"openapi/pkg/models/shared"
)

type GetPersonByIDQueryParams struct {
	APIKey string  `queryParam:"style=form,explode=true,name=api_key"`
	UserID *string `queryParam:"style=form,explode=true,name=user_id"`
}

type GetPersonByID200ApplicationJSON struct {
	Person *shared.Person `json:"person,omitempty"`
	Stat   *string        `json:"stat,omitempty"`
}

type GetPersonByIDRequest struct {
	QueryParams GetPersonByIDQueryParams
}

type GetPersonByIDResponse struct {
	ContentType                           string
	StatusCode                            int64
	GetPersonByID200ApplicationJSONObject *GetPersonByID200ApplicationJSON
}
