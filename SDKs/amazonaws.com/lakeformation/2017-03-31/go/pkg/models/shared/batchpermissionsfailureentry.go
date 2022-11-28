package shared

// BatchPermissionsFailureEntry
// A list of failures when performing a batch grant or batch revoke operation.
type BatchPermissionsFailureEntry struct {
	Error        *ErrorDetail                  `json:"Error,omitempty"`
	RequestEntry *BatchPermissionsRequestEntry `json:"RequestEntry,omitempty"`
}
