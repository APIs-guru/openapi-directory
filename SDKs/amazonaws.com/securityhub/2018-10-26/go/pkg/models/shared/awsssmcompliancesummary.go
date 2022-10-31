package shared

type AwsSsmComplianceSummary struct {
	ComplianceType                 *string `json:"ComplianceType,omitempty"`
	CompliantCriticalCount         *int64  `json:"CompliantCriticalCount,omitempty"`
	CompliantHighCount             *int64  `json:"CompliantHighCount,omitempty"`
	CompliantInformationalCount    *int64  `json:"CompliantInformationalCount,omitempty"`
	CompliantLowCount              *int64  `json:"CompliantLowCount,omitempty"`
	CompliantMediumCount           *int64  `json:"CompliantMediumCount,omitempty"`
	CompliantUnspecifiedCount      *int64  `json:"CompliantUnspecifiedCount,omitempty"`
	ExecutionType                  *string `json:"ExecutionType,omitempty"`
	NonCompliantCriticalCount      *int64  `json:"NonCompliantCriticalCount,omitempty"`
	NonCompliantHighCount          *int64  `json:"NonCompliantHighCount,omitempty"`
	NonCompliantInformationalCount *int64  `json:"NonCompliantInformationalCount,omitempty"`
	NonCompliantLowCount           *int64  `json:"NonCompliantLowCount,omitempty"`
	NonCompliantMediumCount        *int64  `json:"NonCompliantMediumCount,omitempty"`
	NonCompliantUnspecifiedCount   *int64  `json:"NonCompliantUnspecifiedCount,omitempty"`
	OverallSeverity                *string `json:"OverallSeverity,omitempty"`
	PatchBaselineID                *string `json:"PatchBaselineId,omitempty"`
	PatchGroup                     *string `json:"PatchGroup,omitempty"`
	Status                         *string `json:"Status,omitempty"`
}
