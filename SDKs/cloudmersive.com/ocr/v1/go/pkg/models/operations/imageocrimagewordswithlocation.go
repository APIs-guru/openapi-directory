package operations

import (
	"openapi/pkg/models/shared"
)

type ImageOcrImageWordsWithLocationHeaders struct {
	Language      *string `header:"name=language"`
	Preprocessing *string `header:"name=preprocessing"`
}

type ImageOcrImageWordsWithLocationRequestBodyImageFile struct {
	Content   []byte `multipartForm:"content"`
	ImageFile string `multipartForm:"name=imageFile"`
}

type ImageOcrImageWordsWithLocationRequestBody struct {
	ImageFile ImageOcrImageWordsWithLocationRequestBodyImageFile `multipartForm:"file"`
}

type ImageOcrImageWordsWithLocationSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type ImageOcrImageWordsWithLocationRequest struct {
	Headers  ImageOcrImageWordsWithLocationHeaders
	Request  ImageOcrImageWordsWithLocationRequestBody `request:"mediaType=multipart/form-data"`
	Security ImageOcrImageWordsWithLocationSecurity
}

type ImageOcrImageWordsWithLocationResponse struct {
	Body                           []byte
	ContentType                    string
	ImageToWordsWithLocationResult *shared.ImageToWordsWithLocationResult
	StatusCode                     int64
}
