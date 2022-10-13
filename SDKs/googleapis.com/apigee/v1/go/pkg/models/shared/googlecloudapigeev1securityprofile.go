package shared

type GoogleCloudApigeeV1SecurityProfile struct {
	DisplayName         *string                                           `json:"displayName"`
	Environments        []GoogleCloudApigeeV1SecurityProfileEnvironment   `json:"environments"`
	MaxScore            *int32                                            `json:"maxScore"`
	MinScore            *int32                                            `json:"minScore"`
	Name                *string                                           `json:"name"`
	RevisionCreateTime  *string                                           `json:"revisionCreateTime"`
	RevisionID          *string                                           `json:"revisionId"`
	RevisionPublishTime *string                                           `json:"revisionPublishTime"`
	RevisionUpdateTime  *string                                           `json:"revisionUpdateTime"`
	ScoringConfigs      []GoogleCloudApigeeV1SecurityProfileScoringConfig `json:"scoringConfigs"`
}
