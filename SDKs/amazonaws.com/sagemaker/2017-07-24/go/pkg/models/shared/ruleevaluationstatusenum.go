package shared




type RuleEvaluationStatusEnum string

const (
    RuleEvaluationStatusEnumInProgress RuleEvaluationStatusEnum = "InProgress"
RuleEvaluationStatusEnumNoIssuesFound RuleEvaluationStatusEnum = "NoIssuesFound"
RuleEvaluationStatusEnumIssuesFound RuleEvaluationStatusEnum = "IssuesFound"
RuleEvaluationStatusEnumError RuleEvaluationStatusEnum = "Error"
RuleEvaluationStatusEnumStopping RuleEvaluationStatusEnum = "Stopping"
RuleEvaluationStatusEnumStopped RuleEvaluationStatusEnum = "Stopped"
)


