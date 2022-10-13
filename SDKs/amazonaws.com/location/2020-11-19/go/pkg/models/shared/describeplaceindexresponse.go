package shared

import (
	"time"
)

type DescribePlaceIndexResponse struct {
	CreateTime              time.Time               `json:"CreateTime"`
	DataSource              string                  `json:"DataSource"`
	DataSourceConfiguration DataSourceConfiguration `json:"DataSourceConfiguration"`
	Description             string                  `json:"Description"`
	IndexArn                string                  `json:"IndexArn"`
	IndexName               string                  `json:"IndexName"`
	PricingPlan             PricingPlanEnum         `json:"PricingPlan"`
	Tags                    map[string]string       `json:"Tags"`
	UpdateTime              time.Time               `json:"UpdateTime"`
}
