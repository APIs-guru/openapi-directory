package shared

// GoogleCloudApigeeV1SecurityProfile
// Represents a SecurityProfile resource.
type GoogleCloudApigeeV1SecurityProfile struct {
	DisplayName         *string                                           `json:"displayName,omitempty"`
	Environments        []GoogleCloudApigeeV1SecurityProfileEnvironment   `json:"environments,omitempty"`
	MaxScore            *int32                                            `json:"maxScore,omitempty"`
	MinScore            *int32                                            `json:"minScore,omitempty"`
	Name                *string                                           `json:"name,omitempty"`
	RevisionCreateTime  *string                                           `json:"revisionCreateTime,omitempty"`
	RevisionID          *string                                           `json:"revisionId,omitempty"`
	RevisionPublishTime *string                                           `json:"revisionPublishTime,omitempty"`
	RevisionUpdateTime  *string                                           `json:"revisionUpdateTime,omitempty"`
	ScoringConfigs      []GoogleCloudApigeeV1SecurityProfileScoringConfig `json:"scoringConfigs,omitempty"`
}
