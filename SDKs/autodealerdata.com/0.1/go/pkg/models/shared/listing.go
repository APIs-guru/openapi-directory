package shared

import (
	"time"
)

type Listing struct {
	AskPrice      float64                `json:"askPrice"`
	BrandName     string                 `json:"brandName"`
	Color         *string                `json:"color,omitempty"`
	DealerID      int64                  `json:"dealerID"`
	FirstSeen     time.Time              `json:"firstSeen"`
	InteriorColor *string                `json:"interiorColor,omitempty"`
	IsNew         bool                   `json:"isNew"`
	LastSeen      time.Time              `json:"lastSeen"`
	Mileage       *float64               `json:"mileage,omitempty"`
	ModelName     string                 `json:"modelName"`
	Msrp          float64                `json:"msrp"`
	Vin           string                 `json:"vin"`
	VinDecode     map[string]interface{} `json:"vinDecode,omitempty"`
	Year          float64                `json:"year"`
}
