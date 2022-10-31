package shared

import (
"time")

type AssociationSummary struct {
    AssociationType *AssociationEdgeTypeEnum `json:"AssociationType,omitempty"`
    CreatedBy *UserContext `json:"CreatedBy,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    DestinationArn *string `json:"DestinationArn,omitempty"`
    DestinationName *string `json:"DestinationName,omitempty"`
    DestinationType *string `json:"DestinationType,omitempty"`
    SourceArn *string `json:"SourceArn,omitempty"`
    SourceName *string `json:"SourceName,omitempty"`
    SourceType *string `json:"SourceType,omitempty"`
    
}

