package shared

type ChaptersUpdatePayloadFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type ChaptersUpdatePayload struct {
	File ChaptersUpdatePayloadFile `multipartForm:"file"`
}
