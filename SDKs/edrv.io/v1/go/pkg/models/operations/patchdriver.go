package operations

type PatchDriverPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatchDriverRequestBodyAddress struct {
	City            *string `json:"city,omitempty"`
	Country         *string `json:"country,omitempty"`
	PostalCode      *string `json:"postalCode,omitempty"`
	StreetAndNumber *string `json:"streetAndNumber,omitempty"`
}

type PatchDriverRequestBodyPhone struct {
	Home   *string `json:"home,omitempty"`
	Mobile *string `json:"mobile,omitempty"`
	Work   *string `json:"work,omitempty"`
}

type PatchDriverRequestBody struct {
	Active    *bool                          `json:"active,omitempty"`
	Address   *PatchDriverRequestBodyAddress `json:"address,omitempty"`
	Email     *string                        `json:"email,omitempty"`
	Firstname *string                        `json:"firstname,omitempty"`
	Lastname  *string                        `json:"lastname,omitempty"`
	Phone     *PatchDriverRequestBodyPhone   `json:"phone,omitempty"`
	Source    *string                        `json:"source,omitempty"`
	Tokens    []interface{}                  `json:"tokens,omitempty"`
}

type PatchDriverRequest struct {
	PathParams PatchDriverPathParams
	Request    PatchDriverRequestBody `request:"mediaType=application/json"`
}

type PatchDriver200ApplicationJSON struct {
	Message *string       `json:"message,omitempty"`
	Ok      *bool         `json:"ok,omitempty"`
	Result  []interface{} `json:"result,omitempty"`
}

type PatchDriverResponse struct {
	ContentType                         string
	StatusCode                          int64
	PatchDriver200ApplicationJSONObject *PatchDriver200ApplicationJSON
}
