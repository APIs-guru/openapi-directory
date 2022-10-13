package operations

type StromkontoRegisterRequestBody struct {
	Email     *string `json:"email"`
	FirstName *string `json:"first_name"`
	LastName  *string `json:"last_name"`
	Zipcode   *string `json:"zipcode"`
}

type StromkontoRegisterRequest struct {
	Request StromkontoRegisterRequestBody `request:"mediaType=application/json"`
}

type StromkontoRegisterResponse struct {
	ContentType string
	StatusCode  int64
}
