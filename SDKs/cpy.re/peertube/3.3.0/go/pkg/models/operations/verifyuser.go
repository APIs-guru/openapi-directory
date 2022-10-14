package operations

type VerifyUserPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type VerifyUserRequestBody struct {
	IsPendingEmail     *bool  `json:"isPendingEmail,omitempty"`
	VerificationString string `json:"verificationString"`
}

type VerifyUserRequest struct {
	PathParams VerifyUserPathParams
	Request    *VerifyUserRequestBody `request:"mediaType=application/json"`
}

type VerifyUserResponse struct {
	ContentType string
	StatusCode  int64
}
