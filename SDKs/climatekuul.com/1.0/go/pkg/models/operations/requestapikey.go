package operations

var RequestAPIKeyServerList = []string{
	"http://api.climatekuul.com:8000/footprint",
}

type RequestAPIKeyRequestBody struct {
	APIKeyL1      string `form:"name=apiKey_l1"`
	APIKeyL2      string `form:"name=apiKey_l2"`
	Email         string `form:"name=email"`
	Password      int32  `form:"name=password"`
	UserFirstName string `form:"name=userFirstName"`
	UserLastName  string `form:"name=userLastName"`
}

type RequestAPIKeyRequest struct {
	ServerURL *string
	Request   *RequestAPIKeyRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type RequestAPIKeyResponse struct {
	ContentType string
	StatusCode  int64
}
