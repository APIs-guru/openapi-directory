package shared

import (
"time")

type DescribeImportResponse struct {
    CreationDateTime *time.Time `json:"creationDateTime,omitempty"`
    FailureReasons []string `json:"failureReasons,omitempty"`
    ImportID *string `json:"importId,omitempty"`
    ImportStatus *ImportStatusEnum `json:"importStatus,omitempty"`
    ImportedResourceID *string `json:"importedResourceId,omitempty"`
    ImportedResourceName *string `json:"importedResourceName,omitempty"`
    LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
    MergeStrategy *MergeStrategyEnum `json:"mergeStrategy,omitempty"`
    ResourceSpecification *ImportResourceSpecification `json:"resourceSpecification,omitempty"`
    
}

