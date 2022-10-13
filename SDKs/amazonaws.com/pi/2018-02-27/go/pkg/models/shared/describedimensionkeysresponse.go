package shared

import (
	"time"
)

type DescribeDimensionKeysResponse struct {
	AlignedEndTime   *time.Time                `json:"AlignedEndTime"`
	AlignedStartTime *time.Time                `json:"AlignedStartTime"`
	Keys             []DimensionKeyDescription `json:"Keys"`
	NextToken        *string                   `json:"NextToken"`
	PartitionKeys    []ResponsePartitionKey    `json:"PartitionKeys"`
}
