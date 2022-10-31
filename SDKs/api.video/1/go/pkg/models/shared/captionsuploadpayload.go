package shared



type CaptionsUploadPayloadFile struct {
    Content []byte `multipartForm:"content"`
    File string `multipartForm:"name=file"`
    
}

type CaptionsUploadPayload struct {
    File CaptionsUploadPayloadFile `multipartForm:"file"`
    
}

