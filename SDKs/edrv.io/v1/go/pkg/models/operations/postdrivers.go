package operations

type PostDriversRequestBodyAddress struct {
	City            *string `json:"city"`
	Country         *string `json:"country"`
	PostalCode      *string `json:"postalCode"`
	StreetAndNumber *string `json:"streetAndNumber"`
}

type PostDriversRequestBodyPhone struct {
	Home   *string `json:"home"`
	Mobile *string `json:"mobile"`
	Work   *string `json:"work"`
}

type PostDriversRequestBodySourceEnum string

const (
	PostDriversRequestBodySourceEnumPhysical PostDriversRequestBodySourceEnum = "physical"
	PostDriversRequestBodySourceEnumSlack    PostDriversRequestBodySourceEnum = "slack"
	PostDriversRequestBodySourceEnumTelegram PostDriversRequestBodySourceEnum = "telegram"
	PostDriversRequestBodySourceEnumSms      PostDriversRequestBodySourceEnum = "sms"
)

type PostDriversRequestBody struct {
	Active    *bool                            `json:"active"`
	Address   *PostDriversRequestBodyAddress   `json:"address"`
	Email     *string                          `json:"email"`
	Firstname string                           `json:"firstname"`
	Lastname  string                           `json:"lastname"`
	Phone     *PostDriversRequestBodyPhone     `json:"phone"`
	Source    PostDriversRequestBodySourceEnum `json:"source"`
}

type PostDriversRequest struct {
	Request PostDriversRequestBody `request:"mediaType=application/json"`
}

type PostDrivers200ApplicationJSON struct {
	Message *string                `json:"message"`
	Ok      *bool                  `json:"ok"`
	Result  map[string]interface{} `json:"result"`
}

type PostDriversResponse struct {
	ContentType                         string
	StatusCode                          int64
	PostDrivers200ApplicationJSONObject *PostDrivers200ApplicationJSON
}
