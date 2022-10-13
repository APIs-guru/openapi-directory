package shared

type ListRobotApplicationsResponse struct {
	NextToken                 *string                   `json:"nextToken"`
	RobotApplicationSummaries []RobotApplicationSummary `json:"robotApplicationSummaries"`
}
