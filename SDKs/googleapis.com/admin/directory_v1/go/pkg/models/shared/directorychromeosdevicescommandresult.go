package shared

type DirectoryChromeosdevicesCommandResultResultEnum string

const (
	DirectoryChromeosdevicesCommandResultResultEnumCommandResultTypeUnspecified DirectoryChromeosdevicesCommandResultResultEnum = "COMMAND_RESULT_TYPE_UNSPECIFIED"
	DirectoryChromeosdevicesCommandResultResultEnumIgnored                      DirectoryChromeosdevicesCommandResultResultEnum = "IGNORED"
	DirectoryChromeosdevicesCommandResultResultEnumFailure                      DirectoryChromeosdevicesCommandResultResultEnum = "FAILURE"
	DirectoryChromeosdevicesCommandResultResultEnumSuccess                      DirectoryChromeosdevicesCommandResultResultEnum = "SUCCESS"
)

// DirectoryChromeosdevicesCommandResult
// The result of executing a command.
type DirectoryChromeosdevicesCommandResult struct {
	ErrorMessage *string                                          `json:"errorMessage,omitempty"`
	ExecuteTime  *string                                          `json:"executeTime,omitempty"`
	Result       *DirectoryChromeosdevicesCommandResultResultEnum `json:"result,omitempty"`
}
