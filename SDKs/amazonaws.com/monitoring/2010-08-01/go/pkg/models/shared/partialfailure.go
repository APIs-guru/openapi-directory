package shared

// PartialFailure
// This array is empty if the API operation was successful for all the rules specified in the request. If the operation could not process one of the rules, the following data is returned for each of those rules.
type PartialFailure struct {
	ExceptionType      *string
	FailureCode        *string
	FailureDescription *string
	FailureResource    *string
}
