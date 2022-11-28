package operations

type AppAPIWmmEndpointsWmmMagneticFieldQueryParams struct {
	Altitude  float64 `queryParam:"style=form,explode=true,name=altitude"`
	Latitude  float64 `queryParam:"style=form,explode=true,name=latitude"`
	Longitude float64 `queryParam:"style=form,explode=true,name=longitude"`
	Year      float64 `queryParam:"style=form,explode=true,name=year"`
}

// AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONDeclination
// The angle in the horizontal plane between magnetic north and true north. Declination is positive when magnetic north is east of true north.
type AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONDeclination struct {
	Units *string  `json:"units,omitempty"`
	Value *float64 `json:"value,omitempty"`
}

// AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONGridVariation
// Referenced to grid north, referenced to 0 deg meridian of a polar stereographic projection.  Only defined for latitudes greater than 55 degrees and less than -55 degrees (arctic and antarctic).
type AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONGridVariation struct {
	Units *string  `json:"units,omitempty"`
	Value *float64 `json:"value,omitempty"`
}

// AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONInclination
// Also known as 'dip', is the angle made between the horizontal plane and the magnetic field vector at some position. Positive inclination corresponds to a downward pointing.
type AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONInclination struct {
	Units *string  `json:"units,omitempty"`
	Value *float64 `json:"value,omitempty"`
}

// AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONTotalIntensity
// Total magnetic field intensity in nano Teslas.
type AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONTotalIntensity struct {
	Units *string  `json:"units,omitempty"`
	Value *float64 `json:"value,omitempty"`
}

type AppAPIWmmEndpointsWmmMagneticField200ApplicationJSON struct {
	Declination    *AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONDeclination    `json:"declination,omitempty"`
	GridVariation  *AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONGridVariation  `json:"grid_variation,omitempty"`
	Inclination    *AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONInclination    `json:"inclination,omitempty"`
	TotalIntensity *AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONTotalIntensity `json:"total_intensity,omitempty"`
}

type AppAPIWmmEndpointsWmmMagneticFieldRequest struct {
	QueryParams AppAPIWmmEndpointsWmmMagneticFieldQueryParams
}

type AppAPIWmmEndpointsWmmMagneticFieldResponse struct {
	ContentType                                                string
	StatusCode                                                 int64
	AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONObject *AppAPIWmmEndpointsWmmMagneticField200ApplicationJSON
}
