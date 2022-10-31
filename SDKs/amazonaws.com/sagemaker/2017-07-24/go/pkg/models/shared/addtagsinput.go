package shared



type AddTagsInput struct {
    ResourceArn string `json:"ResourceArn"`
    Tags []Tag `json:"Tags"`
    
}

