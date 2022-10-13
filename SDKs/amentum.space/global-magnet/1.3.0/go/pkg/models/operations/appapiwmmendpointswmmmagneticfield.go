package operations

type AppAPIWmmEndpointsWmmMagneticFieldQueryParams struct {
	Altitude  float64 `queryParam:"style=form,explode=true,name=altitude"`
	Latitude  float64 `queryParam:"style=form,explode=true,name=latitude"`
	Longitude float64 `queryParam:"style=form,explode=true,name=longitude"`
	Year      float64 `queryParam:"style=form,explode=true,name=year"`
}

type AppAPIWmmEndpointsWmmMagneticFieldRequest struct {
	QueryParams AppAPIWmmEndpointsWmmMagneticFieldQueryParams
}

type AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONDeclination struct {
	Units *string  `json:"units"`
	Value *float64 `json:"value"`
}

type AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONGridVariation struct {
	Units *string  `json:"units"`
	Value *float64 `json:"value"`
}

type AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONInclination struct {
	Units *string  `json:"units"`
	Value *float64 `json:"value"`
}

type AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONTotalIntensity struct {
	Units *string  `json:"units"`
	Value *float64 `json:"value"`
}

type AppAPIWmmEndpointsWmmMagneticField200ApplicationJSON struct {
	Declination    *AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONDeclination    `json:"declination"`
	GridVariation  *AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONGridVariation  `json:"grid_variation"`
	Inclination    *AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONInclination    `json:"inclination"`
	TotalIntensity *AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONTotalIntensity `json:"total_intensity"`
}

type AppAPIWmmEndpointsWmmMagneticFieldResponse struct {
	ContentType                                                string
	StatusCode                                                 int64
	AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONObject *AppAPIWmmEndpointsWmmMagneticField200ApplicationJSON
}
