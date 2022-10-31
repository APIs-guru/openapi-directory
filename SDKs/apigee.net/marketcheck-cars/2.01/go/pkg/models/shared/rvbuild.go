package shared



type RvBuild struct {
    Area *string `json:"area,omitempty"`
    Class *string `json:"class,omitempty"`
    Engine *string `json:"engine,omitempty"`
    FuelType *string `json:"fuel_type,omitempty"`
    Gvwr *string `json:"gvwr,omitempty"`
    Length *string `json:"length,omitempty"`
    MadeIn *string `json:"made_in,omitempty"`
    Make *string `json:"make,omitempty"`
    Model *string `json:"model,omitempty"`
    Sleeps *string `json:"sleeps,omitempty"`
    Slideouts *string `json:"slideouts,omitempty"`
    Transmission *string `json:"transmission,omitempty"`
    Year *int64 `json:"year,omitempty"`
    
}

