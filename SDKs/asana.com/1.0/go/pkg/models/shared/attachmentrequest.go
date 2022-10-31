package shared



type AttachmentRequestFile struct {
    Content []byte `multipartForm:"content"`
    File string `multipartForm:"name=file"`
    
}


type AttachmentRequestResourceSubtypeEnum string

const (
    AttachmentRequestResourceSubtypeEnumAsanaFileAttachments AttachmentRequestResourceSubtypeEnum = "asana_file_attachments"
AttachmentRequestResourceSubtypeEnumExternal AttachmentRequestResourceSubtypeEnum = "external"
)


type AttachmentRequest struct {
    File *AttachmentRequestFile `multipartForm:"file"`
    Name *string `multipartForm:"name=name"`
    ResourceSubtype *AttachmentRequestResourceSubtypeEnum `multipartForm:"name=resource_subtype"`
    URL *string `multipartForm:"name=url"`
    
}

