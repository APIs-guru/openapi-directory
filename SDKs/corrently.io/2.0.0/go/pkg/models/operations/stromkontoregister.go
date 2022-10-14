package operations

type StromkontoRegisterRequestBody struct {
	Email     *string `json:"email,omitempty"`
	FirstName *string `json:"first_name,omitempty"`
	LastName  *string `json:"last_name,omitempty"`
	Zipcode   *string `json:"zipcode,omitempty"`
}

type StromkontoRegisterRequest struct {
	Request StromkontoRegisterRequestBody `request:"mediaType=application/json"`
}

type StromkontoRegisterResponse struct {
	ContentType string
	StatusCode  int64
}
