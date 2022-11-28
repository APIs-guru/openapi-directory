package shared

import (
	"time"
)

type VideoCommentsForXML struct {
	ContentEncoded *string
	DcCreator      *string
	GUID           *string
	Link           *string
	PubDate        *time.Time
}
