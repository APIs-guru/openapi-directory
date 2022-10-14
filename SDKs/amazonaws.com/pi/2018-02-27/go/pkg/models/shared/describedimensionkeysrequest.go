package shared

import (
	"time"
)

type DescribeDimensionKeysRequest struct {
	EndTime         time.Time         `json:"EndTime"`
	Filter          map[string]string `json:"Filter,omitempty"`
	GroupBy         DimensionGroup    `json:"GroupBy"`
	Identifier      string            `json:"Identifier"`
	MaxResults      *int64            `json:"MaxResults,omitempty"`
	Metric          string            `json:"Metric"`
	NextToken       *string           `json:"NextToken,omitempty"`
	PartitionBy     *DimensionGroup   `json:"PartitionBy,omitempty"`
	PeriodInSeconds *int64            `json:"PeriodInSeconds,omitempty"`
	ServiceType     ServiceTypeEnum   `json:"ServiceType"`
	StartTime       time.Time         `json:"StartTime"`
}
