package shared

import (
	"time"
)

// DataShareAssociation
// The association of a datashare from a producer account with a data consumer.
type DataShareAssociation struct {
	ConsumerIdentifier *string
	CreatedDate        *time.Time
	Status             *DataShareStatusEnum
	StatusChangeDate   *time.Time
}
