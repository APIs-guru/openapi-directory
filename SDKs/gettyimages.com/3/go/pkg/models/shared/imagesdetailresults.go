package shared



type ImagesDetailResults struct {
    Images *interface{} `json:"images,omitempty"`
    ImagesNotFound []string `json:"images_not_found,omitempty"`
    
}

