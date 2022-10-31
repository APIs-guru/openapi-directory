package shared



type TagResourceInput struct {
    ResourceArn string `json:"resourceArn"`
    Tags []Tag `json:"tags"`
    
}

