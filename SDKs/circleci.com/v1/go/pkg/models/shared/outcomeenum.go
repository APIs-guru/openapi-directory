package shared

type OutcomeEnum string

const (
	OutcomeEnumCanceled           OutcomeEnum = "canceled"
	OutcomeEnumInfrastructureFail OutcomeEnum = "infrastructure_fail"
	OutcomeEnumTimedout           OutcomeEnum = "timedout"
	OutcomeEnumFailed             OutcomeEnum = "failed"
	OutcomeEnumNoTests            OutcomeEnum = "no_tests"
	OutcomeEnumSuccess            OutcomeEnum = "success"
)
