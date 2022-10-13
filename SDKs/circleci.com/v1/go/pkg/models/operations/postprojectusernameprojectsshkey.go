package operations

type PostProjectUsernameProjectSSHKeyPathParams struct {
	Project  string `pathParam:"style=simple,explode=false,name=project"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type PostProjectUsernameProjectSSHKeyContentTypeEnum string

const (
	PostProjectUsernameProjectSSHKeyContentTypeEnumApplicationJSON PostProjectUsernameProjectSSHKeyContentTypeEnum = "application/json"
)

type PostProjectUsernameProjectSSHKeyHeaders struct {
	ContentType PostProjectUsernameProjectSSHKeyContentTypeEnum `header:"name=Content-Type"`
}

type PostProjectUsernameProjectSSHKeyRequestBody struct {
	Hostname   *string `json:"hostname"`
	PrivateKey *string `json:"private_key"`
}

type PostProjectUsernameProjectSSHKeyRequest struct {
	PathParams PostProjectUsernameProjectSSHKeyPathParams
	Headers    PostProjectUsernameProjectSSHKeyHeaders
	Request    PostProjectUsernameProjectSSHKeyRequestBody `request:"mediaType=application/json"`
}

type PostProjectUsernameProjectSSHKeyDefaultApplicationJSON struct {
	Message *string `json:"message"`
}

type PostProjectUsernameProjectSSHKeyResponse struct {
	ContentType                                                  string
	PostProjectUsernameProjectSSHKeyDefaultApplicationJSONObject *PostProjectUsernameProjectSSHKeyDefaultApplicationJSON
	StatusCode                                                   int64
}
