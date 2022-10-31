package shared



type TravelCenterOpeningTimes struct {
    Fri []string `json:"fri,omitempty"`
    Mon []string `json:"mon,omitempty"`
    Sat []string `json:"sat,omitempty"`
    Sun []string `json:"sun,omitempty"`
    Thu []string `json:"thu,omitempty"`
    Tue []string `json:"tue,omitempty"`
    Wed []string `json:"wed,omitempty"`
    
}


type TravelCenterTypeEnum string

const (
    TravelCenterTypeEnumReisezentrum TravelCenterTypeEnum = "Reisezentrum"
TravelCenterTypeEnumMobilityCenter TravelCenterTypeEnum = "Mobility Center"
)


type TravelCenter struct {
    Address *string `json:"address,omitempty"`
    City *string `json:"city,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Lat *float64 `json:"lat,omitempty"`
    Lon *float64 `json:"lon,omitempty"`
    Name *string `json:"name,omitempty"`
    OpeningTimes *TravelCenterOpeningTimes `json:"openingTimes,omitempty"`
    PostCode *string `json:"postCode,omitempty"`
    Type *TravelCenterTypeEnum `json:"type,omitempty"`
    
}

