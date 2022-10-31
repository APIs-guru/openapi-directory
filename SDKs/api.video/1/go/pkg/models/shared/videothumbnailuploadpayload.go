package shared

type VideoThumbnailUploadPayloadFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type VideoThumbnailUploadPayload struct {
	File VideoThumbnailUploadPayloadFile `multipartForm:"file"`
}
