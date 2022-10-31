package operations

import (
	"openapi/pkg/models/shared"
)

type ImageOcrPostHeaders struct {
	Language        *string `header:"style=simple,explode=false,name=language"`
	Preprocessing   *string `header:"style=simple,explode=false,name=preprocessing"`
	RecognitionMode *string `header:"style=simple,explode=false,name=recognitionMode"`
}

type ImageOcrPostRequestBodyImageFile struct {
	Content   []byte `multipartForm:"content"`
	ImageFile string `multipartForm:"name=imageFile"`
}

type ImageOcrPostRequestBody struct {
	ImageFile ImageOcrPostRequestBodyImageFile `multipartForm:"file"`
}

type ImageOcrPostSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type ImageOcrPostRequest struct {
	Headers  ImageOcrPostHeaders
	Request  ImageOcrPostRequestBody `request:"mediaType=multipart/form-data"`
	Security ImageOcrPostSecurity
}

type ImageOcrPostResponse struct {
	Body                []byte
	ContentType         string
	ImageToTextResponse *shared.ImageToTextResponse
	StatusCode          int64
}
