package shared

import (
	"time"
)

type DescribeDimensionKeysResponse struct {
	AlignedEndTime   *time.Time                `json:"AlignedEndTime,omitempty"`
	AlignedStartTime *time.Time                `json:"AlignedStartTime,omitempty"`
	Keys             []DimensionKeyDescription `json:"Keys,omitempty"`
	NextToken        *string                   `json:"NextToken,omitempty"`
	PartitionKeys    []ResponsePartitionKey    `json:"PartitionKeys,omitempty"`
}
