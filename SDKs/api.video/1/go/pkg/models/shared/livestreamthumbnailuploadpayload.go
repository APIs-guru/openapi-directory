package shared

type LiveStreamThumbnailUploadPayloadFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type LiveStreamThumbnailUploadPayload struct {
	File LiveStreamThumbnailUploadPayloadFile `multipartForm:"file"`
}
