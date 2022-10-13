package shared

type DirectoryChromeosdevicesCommandStateEnum string

const (
	DirectoryChromeosdevicesCommandStateEnumStateUnspecified DirectoryChromeosdevicesCommandStateEnum = "STATE_UNSPECIFIED"
	DirectoryChromeosdevicesCommandStateEnumPending          DirectoryChromeosdevicesCommandStateEnum = "PENDING"
	DirectoryChromeosdevicesCommandStateEnumExpired          DirectoryChromeosdevicesCommandStateEnum = "EXPIRED"
	DirectoryChromeosdevicesCommandStateEnumCancelled        DirectoryChromeosdevicesCommandStateEnum = "CANCELLED"
	DirectoryChromeosdevicesCommandStateEnumSentToClient     DirectoryChromeosdevicesCommandStateEnum = "SENT_TO_CLIENT"
	DirectoryChromeosdevicesCommandStateEnumAckedByClient    DirectoryChromeosdevicesCommandStateEnum = "ACKED_BY_CLIENT"
	DirectoryChromeosdevicesCommandStateEnumExecutedByClient DirectoryChromeosdevicesCommandStateEnum = "EXECUTED_BY_CLIENT"
)

type DirectoryChromeosdevicesCommandTypeEnum string

const (
	DirectoryChromeosdevicesCommandTypeEnumCommandTypeUnspecified DirectoryChromeosdevicesCommandTypeEnum = "COMMAND_TYPE_UNSPECIFIED"
	DirectoryChromeosdevicesCommandTypeEnumReboot                 DirectoryChromeosdevicesCommandTypeEnum = "REBOOT"
	DirectoryChromeosdevicesCommandTypeEnumTakeAScreenshot        DirectoryChromeosdevicesCommandTypeEnum = "TAKE_A_SCREENSHOT"
	DirectoryChromeosdevicesCommandTypeEnumSetVolume              DirectoryChromeosdevicesCommandTypeEnum = "SET_VOLUME"
	DirectoryChromeosdevicesCommandTypeEnumWipeUsers              DirectoryChromeosdevicesCommandTypeEnum = "WIPE_USERS"
	DirectoryChromeosdevicesCommandTypeEnumRemotePowerwash        DirectoryChromeosdevicesCommandTypeEnum = "REMOTE_POWERWASH"
)

type DirectoryChromeosdevicesCommand struct {
	CommandExpireTime *string                                   `json:"commandExpireTime"`
	CommandID         *string                                   `json:"commandId"`
	CommandResult     *DirectoryChromeosdevicesCommandResult    `json:"commandResult"`
	IssueTime         *string                                   `json:"issueTime"`
	Payload           *string                                   `json:"payload"`
	State             *DirectoryChromeosdevicesCommandStateEnum `json:"state"`
	Type              *DirectoryChromeosdevicesCommandTypeEnum  `json:"type"`
}
