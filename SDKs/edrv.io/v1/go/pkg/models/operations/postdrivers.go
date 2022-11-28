package operations

type PostDriversRequestBodyAddress struct {
	City            *string `json:"city,omitempty"`
	Country         *string `json:"country,omitempty"`
	PostalCode      *string `json:"postalCode,omitempty"`
	StreetAndNumber *string `json:"streetAndNumber,omitempty"`
}

type PostDriversRequestBodyPhone struct {
	Home   *string `json:"home,omitempty"`
	Mobile *string `json:"mobile,omitempty"`
	Work   *string `json:"work,omitempty"`
}

type PostDriversRequestBodySourceEnum string

const (
	PostDriversRequestBodySourceEnumPhysical PostDriversRequestBodySourceEnum = "physical"
	PostDriversRequestBodySourceEnumSlack    PostDriversRequestBodySourceEnum = "slack"
	PostDriversRequestBodySourceEnumTelegram PostDriversRequestBodySourceEnum = "telegram"
	PostDriversRequestBodySourceEnumSms      PostDriversRequestBodySourceEnum = "sms"
)

type PostDriversRequestBody struct {
	Active    *bool                            `json:"active,omitempty"`
	Address   *PostDriversRequestBodyAddress   `json:"address,omitempty"`
	Email     *string                          `json:"email,omitempty"`
	Firstname string                           `json:"firstname"`
	Lastname  string                           `json:"lastname"`
	Phone     *PostDriversRequestBodyPhone     `json:"phone,omitempty"`
	Source    PostDriversRequestBodySourceEnum `json:"source"`
}

type PostDrivers200ApplicationJSON struct {
	Message *string                `json:"message,omitempty"`
	Ok      *bool                  `json:"ok,omitempty"`
	Result  map[string]interface{} `json:"result,omitempty"`
}

type PostDriversRequest struct {
	Request PostDriversRequestBody `request:"mediaType=application/json"`
}

type PostDriversResponse struct {
	ContentType                         string
	StatusCode                          int64
	PostDrivers200ApplicationJSONObject *PostDrivers200ApplicationJSON
}
