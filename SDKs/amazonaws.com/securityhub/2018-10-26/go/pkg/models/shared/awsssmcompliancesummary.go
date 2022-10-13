package shared

type AwsSsmComplianceSummary struct {
	ComplianceType                 *string `json:"ComplianceType"`
	CompliantCriticalCount         *int64  `json:"CompliantCriticalCount"`
	CompliantHighCount             *int64  `json:"CompliantHighCount"`
	CompliantInformationalCount    *int64  `json:"CompliantInformationalCount"`
	CompliantLowCount              *int64  `json:"CompliantLowCount"`
	CompliantMediumCount           *int64  `json:"CompliantMediumCount"`
	CompliantUnspecifiedCount      *int64  `json:"CompliantUnspecifiedCount"`
	ExecutionType                  *string `json:"ExecutionType"`
	NonCompliantCriticalCount      *int64  `json:"NonCompliantCriticalCount"`
	NonCompliantHighCount          *int64  `json:"NonCompliantHighCount"`
	NonCompliantInformationalCount *int64  `json:"NonCompliantInformationalCount"`
	NonCompliantLowCount           *int64  `json:"NonCompliantLowCount"`
	NonCompliantMediumCount        *int64  `json:"NonCompliantMediumCount"`
	NonCompliantUnspecifiedCount   *int64  `json:"NonCompliantUnspecifiedCount"`
	OverallSeverity                *string `json:"OverallSeverity"`
	PatchBaselineID                *string `json:"PatchBaselineId"`
	PatchGroup                     *string `json:"PatchGroup"`
	Status                         *string `json:"Status"`
}
