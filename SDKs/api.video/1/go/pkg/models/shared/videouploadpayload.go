package shared

type VideoUploadPayloadFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type VideoUploadPayload struct {
	File VideoUploadPayloadFile `multipartForm:"file"`
}
