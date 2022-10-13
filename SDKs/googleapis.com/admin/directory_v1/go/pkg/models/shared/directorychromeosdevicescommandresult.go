package shared

type DirectoryChromeosdevicesCommandResultResultEnum string

const (
	DirectoryChromeosdevicesCommandResultResultEnumCommandResultTypeUnspecified DirectoryChromeosdevicesCommandResultResultEnum = "COMMAND_RESULT_TYPE_UNSPECIFIED"
	DirectoryChromeosdevicesCommandResultResultEnumIgnored                      DirectoryChromeosdevicesCommandResultResultEnum = "IGNORED"
	DirectoryChromeosdevicesCommandResultResultEnumFailure                      DirectoryChromeosdevicesCommandResultResultEnum = "FAILURE"
	DirectoryChromeosdevicesCommandResultResultEnumSuccess                      DirectoryChromeosdevicesCommandResultResultEnum = "SUCCESS"
)

type DirectoryChromeosdevicesCommandResult struct {
	ErrorMessage *string                                          `json:"errorMessage"`
	ExecuteTime  *string                                          `json:"executeTime"`
	Result       *DirectoryChromeosdevicesCommandResultResultEnum `json:"result"`
}
