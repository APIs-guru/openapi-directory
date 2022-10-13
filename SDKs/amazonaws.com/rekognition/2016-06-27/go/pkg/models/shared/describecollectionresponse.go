package shared

import (
	"time"
)

type DescribeCollectionResponse struct {
	CollectionArn     *string    `json:"CollectionARN"`
	CreationTimestamp *time.Time `json:"CreationTimestamp"`
	FaceCount         *int64     `json:"FaceCount"`
	FaceModelVersion  *string    `json:"FaceModelVersion"`
}
