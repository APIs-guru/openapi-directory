package shared



type APICoreRequestsConversionPatchBody struct {
    Action *string `json:"Action,omitempty" form:"name=Action"`
    ID *int64 `json:"Id,omitempty" form:"name=Id"`
    ReplaceID *int64 `json:"ReplaceId,omitempty" form:"name=ReplaceId"`
    
}

