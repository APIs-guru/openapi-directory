package operations

type PatchLocationPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatchLocationRequestBodyAddress struct {
	City            *string `json:"city,omitempty"`
	Country         *string `json:"country,omitempty"`
	PostalCode      *string `json:"postalCode,omitempty"`
	State           *string `json:"state,omitempty"`
	StreetAndNumber *string `json:"streetAndNumber,omitempty"`
}

type PatchLocationRequestBodyCoordinates struct {
	Latitude  *float64 `json:"latitude,omitempty"`
	Longitude *float64 `json:"longitude,omitempty"`
}

type PatchLocationRequestBodyOpeningHours0 struct {
	EndTime   *string `json:"endTime,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
}

type PatchLocationRequestBodyOpeningHours1 struct {
	EndTime   *string `json:"endTime,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
}

type PatchLocationRequestBodyOpeningHours2 struct {
	EndTime   *string `json:"endTime,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
}

type PatchLocationRequestBodyOpeningHours3 struct {
	EndTime   *string `json:"endTime,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
}

type PatchLocationRequestBodyOpeningHours4 struct {
	EndTime   *string `json:"endTime,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
}

type PatchLocationRequestBodyOpeningHours5 struct {
	EndTime   *string `json:"endTime,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
}

type PatchLocationRequestBodyOpeningHours6 struct {
	EndTime   *string `json:"endTime,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
}

type PatchLocationRequestBodyOpeningHours struct {
	Zero  []PatchLocationRequestBodyOpeningHours0 `json:"0,omitempty"`
	One   []PatchLocationRequestBodyOpeningHours1 `json:"1,omitempty"`
	Two   []PatchLocationRequestBodyOpeningHours2 `json:"2,omitempty"`
	Three []PatchLocationRequestBodyOpeningHours3 `json:"3,omitempty"`
	Four  []PatchLocationRequestBodyOpeningHours4 `json:"4,omitempty"`
	Five  []PatchLocationRequestBodyOpeningHours5 `json:"5,omitempty"`
	Six   []PatchLocationRequestBodyOpeningHours6 `json:"6,omitempty"`
}

type PatchLocationRequestBody struct {
	Active         *bool                                 `json:"active,omitempty"`
	Address        *PatchLocationRequestBodyAddress      `json:"address,omitempty"`
	Chargestations []interface{}                         `json:"chargestations,omitempty"`
	Coordinates    *PatchLocationRequestBodyCoordinates  `json:"coordinates,omitempty"`
	OpeningHours   *PatchLocationRequestBodyOpeningHours `json:"openingHours,omitempty"`
	OperatorName   *string                               `json:"operatorName,omitempty"`
	Timezone       *string                               `json:"timezone,omitempty"`
}

type PatchLocationRequest struct {
	PathParams PatchLocationPathParams
	Request    PatchLocationRequestBody `request:"mediaType=application/json"`
}

type PatchLocation200ApplicationJSON struct {
	Message *string       `json:"message,omitempty"`
	Ok      *bool         `json:"ok,omitempty"`
	Result  []interface{} `json:"result,omitempty"`
}

type PatchLocationResponse struct {
	ContentType                           string
	StatusCode                            int64
	PatchLocation200ApplicationJSONObject *PatchLocation200ApplicationJSON
}
