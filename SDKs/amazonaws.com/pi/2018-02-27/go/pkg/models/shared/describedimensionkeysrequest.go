package shared

import (
	"time"
)

type DescribeDimensionKeysRequest struct {
	EndTime         time.Time         `json:"EndTime"`
	Filter          map[string]string `json:"Filter"`
	GroupBy         DimensionGroup    `json:"GroupBy"`
	Identifier      string            `json:"Identifier"`
	MaxResults      *int64            `json:"MaxResults"`
	Metric          string            `json:"Metric"`
	NextToken       *string           `json:"NextToken"`
	PartitionBy     *DimensionGroup   `json:"PartitionBy"`
	PeriodInSeconds *int64            `json:"PeriodInSeconds"`
	ServiceType     ServiceTypeEnum   `json:"ServiceType"`
	StartTime       time.Time         `json:"StartTime"`
}
