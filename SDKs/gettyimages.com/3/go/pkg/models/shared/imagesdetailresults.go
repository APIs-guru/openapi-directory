package shared

type ImagesDetailResults struct {
	Images         *interface{} `json:"images"`
	ImagesNotFound []string     `json:"images_not_found"`
}
