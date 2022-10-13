package operations

import (
	"openapi/pkg/models/shared"
)

type ImageOcrPhotoRecognizeBusinessCardRequestBodyImageFile struct {
	Content   []byte `multipartForm:"content"`
	ImageFile string `multipartForm:"name=imageFile"`
}

type ImageOcrPhotoRecognizeBusinessCardRequestBody struct {
	ImageFile ImageOcrPhotoRecognizeBusinessCardRequestBodyImageFile `multipartForm:"file"`
}

type ImageOcrPhotoRecognizeBusinessCardSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type ImageOcrPhotoRecognizeBusinessCardRequest struct {
	Request  ImageOcrPhotoRecognizeBusinessCardRequestBody `request:"mediaType=multipart/form-data"`
	Security ImageOcrPhotoRecognizeBusinessCardSecurity
}

type ImageOcrPhotoRecognizeBusinessCardResponse struct {
	Body                          []byte
	BusinessCardRecognitionResult *shared.BusinessCardRecognitionResult
	ContentType                   string
	StatusCode                    int64
}
