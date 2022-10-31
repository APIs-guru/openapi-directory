package operations



type AppAPIWmmEndpointsWmmMagneticFieldQueryParams struct {
    Altitude float64 `queryParam:"style=form,explode=true,name=altitude"`
    Latitude float64 `queryParam:"style=form,explode=true,name=latitude"`
    Longitude float64 `queryParam:"style=form,explode=true,name=longitude"`
    Year float64 `queryParam:"style=form,explode=true,name=year"`
    
}

type AppAPIWmmEndpointsWmmMagneticFieldRequest struct {
    QueryParams AppAPIWmmEndpointsWmmMagneticFieldQueryParams 
    
}

type AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONDeclination struct {
    Units *string `json:"units,omitempty"`
    Value *float64 `json:"value,omitempty"`
    
}

type AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONGridVariation struct {
    Units *string `json:"units,omitempty"`
    Value *float64 `json:"value,omitempty"`
    
}

type AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONInclination struct {
    Units *string `json:"units,omitempty"`
    Value *float64 `json:"value,omitempty"`
    
}

type AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONTotalIntensity struct {
    Units *string `json:"units,omitempty"`
    Value *float64 `json:"value,omitempty"`
    
}

type AppAPIWmmEndpointsWmmMagneticField200ApplicationJSON struct {
    Declination *AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONDeclination `json:"declination,omitempty"`
    GridVariation *AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONGridVariation `json:"grid_variation,omitempty"`
    Inclination *AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONInclination `json:"inclination,omitempty"`
    TotalIntensity *AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONTotalIntensity `json:"total_intensity,omitempty"`
    
}

type AppAPIWmmEndpointsWmmMagneticFieldResponse struct {
    ContentType string 
    StatusCode int64 
    AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONObject *AppAPIWmmEndpointsWmmMagneticField200ApplicationJSON 
    
}

