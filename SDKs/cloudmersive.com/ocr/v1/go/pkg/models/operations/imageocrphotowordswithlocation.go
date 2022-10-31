package operations

import (
	"openapi/pkg/models/shared"
)

type ImageOcrPhotoWordsWithLocationHeaders struct {
	Diagnostics     *string `header:"style=simple,explode=false,name=diagnostics"`
	Language        *string `header:"style=simple,explode=false,name=language"`
	Preprocessing   *string `header:"style=simple,explode=false,name=preprocessing"`
	RecognitionMode *string `header:"style=simple,explode=false,name=recognitionMode"`
}

type ImageOcrPhotoWordsWithLocationRequestBodyImageFile struct {
	Content   []byte `multipartForm:"content"`
	ImageFile string `multipartForm:"name=imageFile"`
}

type ImageOcrPhotoWordsWithLocationRequestBody struct {
	ImageFile ImageOcrPhotoWordsWithLocationRequestBodyImageFile `multipartForm:"file"`
}

type ImageOcrPhotoWordsWithLocationSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type ImageOcrPhotoWordsWithLocationRequest struct {
	Headers  ImageOcrPhotoWordsWithLocationHeaders
	Request  ImageOcrPhotoWordsWithLocationRequestBody `request:"mediaType=multipart/form-data"`
	Security ImageOcrPhotoWordsWithLocationSecurity
}

type ImageOcrPhotoWordsWithLocationResponse struct {
	Body                           []byte
	ContentType                    string
	PhotoToWordsWithLocationResult *shared.PhotoToWordsWithLocationResult
	StatusCode                     int64
}
