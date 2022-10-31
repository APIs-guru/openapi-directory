package shared



type UntagResourceRequest struct {
    InstanceArn string `json:"InstanceArn"`
    ResourceArn string `json:"ResourceArn"`
    TagKeys []string `json:"TagKeys"`
    
}

