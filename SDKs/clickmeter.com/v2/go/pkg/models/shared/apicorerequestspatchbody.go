package shared



type APICoreRequestsPatchBody struct {
    Action *string `json:"Action,omitempty" form:"name=Action"`
    ID *int64 `json:"Id,omitempty" form:"name=Id"`
    
}

