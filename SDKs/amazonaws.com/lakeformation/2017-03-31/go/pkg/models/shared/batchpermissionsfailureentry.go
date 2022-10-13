package shared

type BatchPermissionsFailureEntry struct {
	Error        *ErrorDetail                  `json:"Error"`
	RequestEntry *BatchPermissionsRequestEntry `json:"RequestEntry"`
}
