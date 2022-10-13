package shared

type TravelCenterOpeningTimes struct {
	Fri []string `json:"fri"`
	Mon []string `json:"mon"`
	Sat []string `json:"sat"`
	Sun []string `json:"sun"`
	Thu []string `json:"thu"`
	Tue []string `json:"tue"`
	Wed []string `json:"wed"`
}

type TravelCenterTypeEnum string

const (
	TravelCenterTypeEnumReisezentrum   TravelCenterTypeEnum = "Reisezentrum"
	TravelCenterTypeEnumMobilityCenter TravelCenterTypeEnum = "Mobility Center"
)

type TravelCenter struct {
	Address      *string                   `json:"address"`
	City         *string                   `json:"city"`
	ID           *int64                    `json:"id"`
	Lat          *float64                  `json:"lat"`
	Lon          *float64                  `json:"lon"`
	Name         *string                   `json:"name"`
	OpeningTimes *TravelCenterOpeningTimes `json:"openingTimes"`
	PostCode     *string                   `json:"postCode"`
	Type         *TravelCenterTypeEnum     `json:"type"`
}
