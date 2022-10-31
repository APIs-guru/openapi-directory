package operations



type GetAPIVi200ApplicationJSONLinksHolidays struct {
    Href *string `json:"href,omitempty"`
    
}

type GetAPIVi200ApplicationJSONLinksProvinces struct {
    Href *string `json:"href,omitempty"`
    
}

type GetAPIVi200ApplicationJSONLinksSelf struct {
    Href *string `json:"href,omitempty"`
    
}

type GetAPIVi200ApplicationJSONLinks struct {
    Holidays *GetAPIVi200ApplicationJSONLinksHolidays `json:"holidays,omitempty"`
    Provinces *GetAPIVi200ApplicationJSONLinksProvinces `json:"provinces,omitempty"`
    Self *GetAPIVi200ApplicationJSONLinksSelf `json:"self,omitempty"`
    
}

type GetAPIVi200ApplicationJSON struct {
    Links *GetAPIVi200ApplicationJSONLinks `json:"_links,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetAPIViResponse struct {
    ContentType string 
    StatusCode int64 
    GetAPIVi200ApplicationJSONObject *GetAPIVi200ApplicationJSON 
    
}

