package shared



type S3FileUploadPart struct {
    PartEtag string `json:"partEtag"`
    PartNumber int32 `json:"partNumber"`
    
}

