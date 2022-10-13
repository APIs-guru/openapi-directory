package operations

type PatchDriverPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatchDriverRequestBodyAddress struct {
	City            *string `json:"city"`
	Country         *string `json:"country"`
	PostalCode      *string `json:"postalCode"`
	StreetAndNumber *string `json:"streetAndNumber"`
}

type PatchDriverRequestBodyPhone struct {
	Home   *string `json:"home"`
	Mobile *string `json:"mobile"`
	Work   *string `json:"work"`
}

type PatchDriverRequestBody struct {
	Active    *bool                          `json:"active"`
	Address   *PatchDriverRequestBodyAddress `json:"address"`
	Email     *string                        `json:"email"`
	Firstname *string                        `json:"firstname"`
	Lastname  *string                        `json:"lastname"`
	Phone     *PatchDriverRequestBodyPhone   `json:"phone"`
	Source    *string                        `json:"source"`
	Tokens    []interface{}                  `json:"tokens"`
}

type PatchDriverRequest struct {
	PathParams PatchDriverPathParams
	Request    PatchDriverRequestBody `request:"mediaType=application/json"`
}

type PatchDriver200ApplicationJSON struct {
	Message *string       `json:"message"`
	Ok      *bool         `json:"ok"`
	Result  []interface{} `json:"result"`
}

type PatchDriverResponse struct {
	ContentType                         string
	StatusCode                          int64
	PatchDriver200ApplicationJSONObject *PatchDriver200ApplicationJSON
}
