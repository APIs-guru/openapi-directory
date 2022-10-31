package operations

import (
	"openapi/pkg/models/shared"
)

type UploadFileByTokenAsBinary1PathParams struct {
	Token string `pathParam:"style=simple,explode=false,name=token"`
}

type UploadFileByTokenAsBinary1Headers struct {
	ContentRange *string `header:"style=simple,explode=false,name=Content-Range"`
}

type UploadFileByTokenAsBinary1RequestBodyFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type UploadFileByTokenAsBinary1RequestBody struct {
	File *UploadFileByTokenAsBinary1RequestBodyFile `multipartForm:"file"`
}

type UploadFileByTokenAsBinary1Request struct {
	PathParams UploadFileByTokenAsBinary1PathParams
	Headers    UploadFileByTokenAsBinary1Headers
	Request    UploadFileByTokenAsBinary1RequestBody `request:"mediaType=multipart/form-data"`
}

type UploadFileByTokenAsBinary1Response struct {
	ChunkUploadResponse                               *shared.ChunkUploadResponse
	ContentType                                       string
	StatusCode                                        int64
	UploadFileByTokenAsBinary1400ApplicationJSONOneOf *interface{}
	UploadFileByTokenAsBinary1401ApplicationJSONOneOf *interface{}
	UploadFileByTokenAsBinary1403ApplicationJSONOneOf *interface{}
	UploadFileByTokenAsBinary1404ApplicationJSONOneOf *interface{}
	UploadFileByTokenAsBinary1406ApplicationJSONOneOf *interface{}
	UploadFileByTokenAsBinary1507ApplicationJSONOneOf *interface{}
}
