package shared



type TokenUploadPayloadFile struct {
    Content []byte `multipartForm:"content"`
    File string `multipartForm:"name=file"`
    
}

type TokenUploadPayload struct {
    File TokenUploadPayloadFile `multipartForm:"file"`
    VideoID *string `multipartForm:"name=videoId"`
    
}

