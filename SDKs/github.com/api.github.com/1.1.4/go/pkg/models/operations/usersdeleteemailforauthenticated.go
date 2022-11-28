package operations

import (
	"openapi/pkg/models/shared"
)

// UsersDeleteEmailForAuthenticatedRequestBody1
// Deletes one or more email addresses from your GitHub account. Must contain at least one email address. **Note:** Alternatively, you can pass a single email address or an `array` of emails addresses directly, but we recommend that you pass an object using the `emails` key.
type UsersDeleteEmailForAuthenticatedRequestBody1 struct {
	Emails []string `json:"emails"`
}

type UsersDeleteEmailForAuthenticatedRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type UsersDeleteEmailForAuthenticatedResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	ValidationError *shared.ValidationError
}
