package shared

type DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnum string

const (
	DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnumCommandTypeUnspecified DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnum = "COMMAND_TYPE_UNSPECIFIED"
	DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnumReboot                 DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnum = "REBOOT"
	DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnumTakeAScreenshot        DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnum = "TAKE_A_SCREENSHOT"
	DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnumSetVolume              DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnum = "SET_VOLUME"
	DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnumWipeUsers              DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnum = "WIPE_USERS"
	DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnumRemotePowerwash        DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnum = "REMOTE_POWERWASH"
)

// DirectoryChromeosdevicesIssueCommandRequest
// A request for issuing a command.
type DirectoryChromeosdevicesIssueCommandRequest struct {
	CommandType *DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnum `json:"commandType,omitempty"`
	Payload     *string                                                     `json:"payload,omitempty"`
}
