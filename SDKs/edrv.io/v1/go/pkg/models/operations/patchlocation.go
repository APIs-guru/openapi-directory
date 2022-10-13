package operations

type PatchLocationPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatchLocationRequestBodyAddress struct {
	City            *string `json:"city"`
	Country         *string `json:"country"`
	PostalCode      *string `json:"postalCode"`
	State           *string `json:"state"`
	StreetAndNumber *string `json:"streetAndNumber"`
}

type PatchLocationRequestBodyCoordinates struct {
	Latitude  *float64 `json:"latitude"`
	Longitude *float64 `json:"longitude"`
}

type PatchLocationRequestBodyOpeningHours0 struct {
	EndTime   *string `json:"endTime"`
	StartTime *string `json:"startTime"`
}

type PatchLocationRequestBodyOpeningHours1 struct {
	EndTime   *string `json:"endTime"`
	StartTime *string `json:"startTime"`
}

type PatchLocationRequestBodyOpeningHours2 struct {
	EndTime   *string `json:"endTime"`
	StartTime *string `json:"startTime"`
}

type PatchLocationRequestBodyOpeningHours3 struct {
	EndTime   *string `json:"endTime"`
	StartTime *string `json:"startTime"`
}

type PatchLocationRequestBodyOpeningHours4 struct {
	EndTime   *string `json:"endTime"`
	StartTime *string `json:"startTime"`
}

type PatchLocationRequestBodyOpeningHours5 struct {
	EndTime   *string `json:"endTime"`
	StartTime *string `json:"startTime"`
}

type PatchLocationRequestBodyOpeningHours6 struct {
	EndTime   *string `json:"endTime"`
	StartTime *string `json:"startTime"`
}

type PatchLocationRequestBodyOpeningHours struct {
	Zero  []PatchLocationRequestBodyOpeningHours0 `json:"0"`
	One   []PatchLocationRequestBodyOpeningHours1 `json:"1"`
	Two   []PatchLocationRequestBodyOpeningHours2 `json:"2"`
	Three []PatchLocationRequestBodyOpeningHours3 `json:"3"`
	Four  []PatchLocationRequestBodyOpeningHours4 `json:"4"`
	Five  []PatchLocationRequestBodyOpeningHours5 `json:"5"`
	Six   []PatchLocationRequestBodyOpeningHours6 `json:"6"`
}

type PatchLocationRequestBody struct {
	Active         *bool                                 `json:"active"`
	Address        *PatchLocationRequestBodyAddress      `json:"address"`
	Chargestations []interface{}                         `json:"chargestations"`
	Coordinates    *PatchLocationRequestBodyCoordinates  `json:"coordinates"`
	OpeningHours   *PatchLocationRequestBodyOpeningHours `json:"openingHours"`
	OperatorName   *string                               `json:"operatorName"`
	Timezone       *string                               `json:"timezone"`
}

type PatchLocationRequest struct {
	PathParams PatchLocationPathParams
	Request    PatchLocationRequestBody `request:"mediaType=application/json"`
}

type PatchLocation200ApplicationJSON struct {
	Message *string       `json:"message"`
	Ok      *bool         `json:"ok"`
	Result  []interface{} `json:"result"`
}

type PatchLocationResponse struct {
	ContentType                           string
	StatusCode                            int64
	PatchLocation200ApplicationJSONObject *PatchLocation200ApplicationJSON
}
