package operations

import (
	"openapi/pkg/models/shared"
)

type PdfOcrPostHeaders struct {
	Language        *string `header:"name=language"`
	Preprocessing   *string `header:"name=preprocessing"`
	RecognitionMode *string `header:"name=recognitionMode"`
}

type PdfOcrPostRequestBodyImageFile struct {
	Content   []byte `multipartForm:"content"`
	ImageFile string `multipartForm:"name=imageFile"`
}

type PdfOcrPostRequestBody struct {
	ImageFile PdfOcrPostRequestBodyImageFile `multipartForm:"file"`
}

type PdfOcrPostSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type PdfOcrPostRequest struct {
	Headers  PdfOcrPostHeaders
	Request  PdfOcrPostRequestBody `request:"mediaType=multipart/form-data"`
	Security PdfOcrPostSecurity
}

type PdfOcrPostResponse struct {
	Body              []byte
	ContentType       string
	PdfToTextResponse *shared.PdfToTextResponse
	StatusCode        int64
}
