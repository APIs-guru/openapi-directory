package shared



type UploadConfiguration struct {
    Name string `json:"name"`
    Path string `json:"path"`
    UploadBehavior UploadBehaviorEnum `json:"uploadBehavior"`
    
}

