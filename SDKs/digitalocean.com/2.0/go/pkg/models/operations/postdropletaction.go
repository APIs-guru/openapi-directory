package operations

import (
	"openapi/pkg/models/shared"
)

type PostDropletActionPathParams struct {
	DropletID int64 `pathParam:"style=simple,explode=false,name=droplet_id"`
}

type PostDropletActionRequestBody1TypeEnum string

const (
	PostDropletActionRequestBody1TypeEnumEnableBackups  PostDropletActionRequestBody1TypeEnum = "enable_backups"
	PostDropletActionRequestBody1TypeEnumDisableBackups PostDropletActionRequestBody1TypeEnum = "disable_backups"
	PostDropletActionRequestBody1TypeEnumReboot         PostDropletActionRequestBody1TypeEnum = "reboot"
	PostDropletActionRequestBody1TypeEnumPowerCycle     PostDropletActionRequestBody1TypeEnum = "power_cycle"
	PostDropletActionRequestBody1TypeEnumShutdown       PostDropletActionRequestBody1TypeEnum = "shutdown"
	PostDropletActionRequestBody1TypeEnumPowerOff       PostDropletActionRequestBody1TypeEnum = "power_off"
	PostDropletActionRequestBody1TypeEnumPowerOn        PostDropletActionRequestBody1TypeEnum = "power_on"
	PostDropletActionRequestBody1TypeEnumRestore        PostDropletActionRequestBody1TypeEnum = "restore"
	PostDropletActionRequestBody1TypeEnumPasswordReset  PostDropletActionRequestBody1TypeEnum = "password_reset"
	PostDropletActionRequestBody1TypeEnumResize         PostDropletActionRequestBody1TypeEnum = "resize"
	PostDropletActionRequestBody1TypeEnumRebuild        PostDropletActionRequestBody1TypeEnum = "rebuild"
	PostDropletActionRequestBody1TypeEnumRename         PostDropletActionRequestBody1TypeEnum = "rename"
	PostDropletActionRequestBody1TypeEnumChangeKernel   PostDropletActionRequestBody1TypeEnum = "change_kernel"
	PostDropletActionRequestBody1TypeEnumEnableIpv6     PostDropletActionRequestBody1TypeEnum = "enable_ipv6"
	PostDropletActionRequestBody1TypeEnumSnapshot       PostDropletActionRequestBody1TypeEnum = "snapshot"
)

type PostDropletActionRequestBody1 struct {
	Type PostDropletActionRequestBody1TypeEnum `json:"type"`
}

type PostDropletActionRequestBody2TypeEnum string

const (
	PostDropletActionRequestBody2TypeEnumEnableBackups  PostDropletActionRequestBody2TypeEnum = "enable_backups"
	PostDropletActionRequestBody2TypeEnumDisableBackups PostDropletActionRequestBody2TypeEnum = "disable_backups"
	PostDropletActionRequestBody2TypeEnumReboot         PostDropletActionRequestBody2TypeEnum = "reboot"
	PostDropletActionRequestBody2TypeEnumPowerCycle     PostDropletActionRequestBody2TypeEnum = "power_cycle"
	PostDropletActionRequestBody2TypeEnumShutdown       PostDropletActionRequestBody2TypeEnum = "shutdown"
	PostDropletActionRequestBody2TypeEnumPowerOff       PostDropletActionRequestBody2TypeEnum = "power_off"
	PostDropletActionRequestBody2TypeEnumPowerOn        PostDropletActionRequestBody2TypeEnum = "power_on"
	PostDropletActionRequestBody2TypeEnumRestore        PostDropletActionRequestBody2TypeEnum = "restore"
	PostDropletActionRequestBody2TypeEnumPasswordReset  PostDropletActionRequestBody2TypeEnum = "password_reset"
	PostDropletActionRequestBody2TypeEnumResize         PostDropletActionRequestBody2TypeEnum = "resize"
	PostDropletActionRequestBody2TypeEnumRebuild        PostDropletActionRequestBody2TypeEnum = "rebuild"
	PostDropletActionRequestBody2TypeEnumRename         PostDropletActionRequestBody2TypeEnum = "rename"
	PostDropletActionRequestBody2TypeEnumChangeKernel   PostDropletActionRequestBody2TypeEnum = "change_kernel"
	PostDropletActionRequestBody2TypeEnumEnableIpv6     PostDropletActionRequestBody2TypeEnum = "enable_ipv6"
	PostDropletActionRequestBody2TypeEnumSnapshot       PostDropletActionRequestBody2TypeEnum = "snapshot"
)

type PostDropletActionRequestBody2 struct {
	Image *int64                                `json:"image"`
	Type  PostDropletActionRequestBody2TypeEnum `json:"type"`
}

type PostDropletActionRequestBody3TypeEnum string

const (
	PostDropletActionRequestBody3TypeEnumEnableBackups  PostDropletActionRequestBody3TypeEnum = "enable_backups"
	PostDropletActionRequestBody3TypeEnumDisableBackups PostDropletActionRequestBody3TypeEnum = "disable_backups"
	PostDropletActionRequestBody3TypeEnumReboot         PostDropletActionRequestBody3TypeEnum = "reboot"
	PostDropletActionRequestBody3TypeEnumPowerCycle     PostDropletActionRequestBody3TypeEnum = "power_cycle"
	PostDropletActionRequestBody3TypeEnumShutdown       PostDropletActionRequestBody3TypeEnum = "shutdown"
	PostDropletActionRequestBody3TypeEnumPowerOff       PostDropletActionRequestBody3TypeEnum = "power_off"
	PostDropletActionRequestBody3TypeEnumPowerOn        PostDropletActionRequestBody3TypeEnum = "power_on"
	PostDropletActionRequestBody3TypeEnumRestore        PostDropletActionRequestBody3TypeEnum = "restore"
	PostDropletActionRequestBody3TypeEnumPasswordReset  PostDropletActionRequestBody3TypeEnum = "password_reset"
	PostDropletActionRequestBody3TypeEnumResize         PostDropletActionRequestBody3TypeEnum = "resize"
	PostDropletActionRequestBody3TypeEnumRebuild        PostDropletActionRequestBody3TypeEnum = "rebuild"
	PostDropletActionRequestBody3TypeEnumRename         PostDropletActionRequestBody3TypeEnum = "rename"
	PostDropletActionRequestBody3TypeEnumChangeKernel   PostDropletActionRequestBody3TypeEnum = "change_kernel"
	PostDropletActionRequestBody3TypeEnumEnableIpv6     PostDropletActionRequestBody3TypeEnum = "enable_ipv6"
	PostDropletActionRequestBody3TypeEnumSnapshot       PostDropletActionRequestBody3TypeEnum = "snapshot"
)

type PostDropletActionRequestBody3 struct {
	Disk *bool                                 `json:"disk"`
	Size *string                               `json:"size"`
	Type PostDropletActionRequestBody3TypeEnum `json:"type"`
}

type PostDropletActionRequestBody4TypeEnum string

const (
	PostDropletActionRequestBody4TypeEnumEnableBackups  PostDropletActionRequestBody4TypeEnum = "enable_backups"
	PostDropletActionRequestBody4TypeEnumDisableBackups PostDropletActionRequestBody4TypeEnum = "disable_backups"
	PostDropletActionRequestBody4TypeEnumReboot         PostDropletActionRequestBody4TypeEnum = "reboot"
	PostDropletActionRequestBody4TypeEnumPowerCycle     PostDropletActionRequestBody4TypeEnum = "power_cycle"
	PostDropletActionRequestBody4TypeEnumShutdown       PostDropletActionRequestBody4TypeEnum = "shutdown"
	PostDropletActionRequestBody4TypeEnumPowerOff       PostDropletActionRequestBody4TypeEnum = "power_off"
	PostDropletActionRequestBody4TypeEnumPowerOn        PostDropletActionRequestBody4TypeEnum = "power_on"
	PostDropletActionRequestBody4TypeEnumRestore        PostDropletActionRequestBody4TypeEnum = "restore"
	PostDropletActionRequestBody4TypeEnumPasswordReset  PostDropletActionRequestBody4TypeEnum = "password_reset"
	PostDropletActionRequestBody4TypeEnumResize         PostDropletActionRequestBody4TypeEnum = "resize"
	PostDropletActionRequestBody4TypeEnumRebuild        PostDropletActionRequestBody4TypeEnum = "rebuild"
	PostDropletActionRequestBody4TypeEnumRename         PostDropletActionRequestBody4TypeEnum = "rename"
	PostDropletActionRequestBody4TypeEnumChangeKernel   PostDropletActionRequestBody4TypeEnum = "change_kernel"
	PostDropletActionRequestBody4TypeEnumEnableIpv6     PostDropletActionRequestBody4TypeEnum = "enable_ipv6"
	PostDropletActionRequestBody4TypeEnumSnapshot       PostDropletActionRequestBody4TypeEnum = "snapshot"
)

type PostDropletActionRequestBody4 struct {
	Image *interface{}                          `json:"image"`
	Type  PostDropletActionRequestBody4TypeEnum `json:"type"`
}

type PostDropletActionRequestBody5TypeEnum string

const (
	PostDropletActionRequestBody5TypeEnumEnableBackups  PostDropletActionRequestBody5TypeEnum = "enable_backups"
	PostDropletActionRequestBody5TypeEnumDisableBackups PostDropletActionRequestBody5TypeEnum = "disable_backups"
	PostDropletActionRequestBody5TypeEnumReboot         PostDropletActionRequestBody5TypeEnum = "reboot"
	PostDropletActionRequestBody5TypeEnumPowerCycle     PostDropletActionRequestBody5TypeEnum = "power_cycle"
	PostDropletActionRequestBody5TypeEnumShutdown       PostDropletActionRequestBody5TypeEnum = "shutdown"
	PostDropletActionRequestBody5TypeEnumPowerOff       PostDropletActionRequestBody5TypeEnum = "power_off"
	PostDropletActionRequestBody5TypeEnumPowerOn        PostDropletActionRequestBody5TypeEnum = "power_on"
	PostDropletActionRequestBody5TypeEnumRestore        PostDropletActionRequestBody5TypeEnum = "restore"
	PostDropletActionRequestBody5TypeEnumPasswordReset  PostDropletActionRequestBody5TypeEnum = "password_reset"
	PostDropletActionRequestBody5TypeEnumResize         PostDropletActionRequestBody5TypeEnum = "resize"
	PostDropletActionRequestBody5TypeEnumRebuild        PostDropletActionRequestBody5TypeEnum = "rebuild"
	PostDropletActionRequestBody5TypeEnumRename         PostDropletActionRequestBody5TypeEnum = "rename"
	PostDropletActionRequestBody5TypeEnumChangeKernel   PostDropletActionRequestBody5TypeEnum = "change_kernel"
	PostDropletActionRequestBody5TypeEnumEnableIpv6     PostDropletActionRequestBody5TypeEnum = "enable_ipv6"
	PostDropletActionRequestBody5TypeEnumSnapshot       PostDropletActionRequestBody5TypeEnum = "snapshot"
)

type PostDropletActionRequestBody5 struct {
	Name *string                               `json:"name"`
	Type PostDropletActionRequestBody5TypeEnum `json:"type"`
}

type PostDropletActionRequestBody6TypeEnum string

const (
	PostDropletActionRequestBody6TypeEnumEnableBackups  PostDropletActionRequestBody6TypeEnum = "enable_backups"
	PostDropletActionRequestBody6TypeEnumDisableBackups PostDropletActionRequestBody6TypeEnum = "disable_backups"
	PostDropletActionRequestBody6TypeEnumReboot         PostDropletActionRequestBody6TypeEnum = "reboot"
	PostDropletActionRequestBody6TypeEnumPowerCycle     PostDropletActionRequestBody6TypeEnum = "power_cycle"
	PostDropletActionRequestBody6TypeEnumShutdown       PostDropletActionRequestBody6TypeEnum = "shutdown"
	PostDropletActionRequestBody6TypeEnumPowerOff       PostDropletActionRequestBody6TypeEnum = "power_off"
	PostDropletActionRequestBody6TypeEnumPowerOn        PostDropletActionRequestBody6TypeEnum = "power_on"
	PostDropletActionRequestBody6TypeEnumRestore        PostDropletActionRequestBody6TypeEnum = "restore"
	PostDropletActionRequestBody6TypeEnumPasswordReset  PostDropletActionRequestBody6TypeEnum = "password_reset"
	PostDropletActionRequestBody6TypeEnumResize         PostDropletActionRequestBody6TypeEnum = "resize"
	PostDropletActionRequestBody6TypeEnumRebuild        PostDropletActionRequestBody6TypeEnum = "rebuild"
	PostDropletActionRequestBody6TypeEnumRename         PostDropletActionRequestBody6TypeEnum = "rename"
	PostDropletActionRequestBody6TypeEnumChangeKernel   PostDropletActionRequestBody6TypeEnum = "change_kernel"
	PostDropletActionRequestBody6TypeEnumEnableIpv6     PostDropletActionRequestBody6TypeEnum = "enable_ipv6"
	PostDropletActionRequestBody6TypeEnumSnapshot       PostDropletActionRequestBody6TypeEnum = "snapshot"
)

type PostDropletActionRequestBody6 struct {
	Kernel *int64                                `json:"kernel"`
	Type   PostDropletActionRequestBody6TypeEnum `json:"type"`
}

type PostDropletActionRequestBody7TypeEnum string

const (
	PostDropletActionRequestBody7TypeEnumEnableBackups  PostDropletActionRequestBody7TypeEnum = "enable_backups"
	PostDropletActionRequestBody7TypeEnumDisableBackups PostDropletActionRequestBody7TypeEnum = "disable_backups"
	PostDropletActionRequestBody7TypeEnumReboot         PostDropletActionRequestBody7TypeEnum = "reboot"
	PostDropletActionRequestBody7TypeEnumPowerCycle     PostDropletActionRequestBody7TypeEnum = "power_cycle"
	PostDropletActionRequestBody7TypeEnumShutdown       PostDropletActionRequestBody7TypeEnum = "shutdown"
	PostDropletActionRequestBody7TypeEnumPowerOff       PostDropletActionRequestBody7TypeEnum = "power_off"
	PostDropletActionRequestBody7TypeEnumPowerOn        PostDropletActionRequestBody7TypeEnum = "power_on"
	PostDropletActionRequestBody7TypeEnumRestore        PostDropletActionRequestBody7TypeEnum = "restore"
	PostDropletActionRequestBody7TypeEnumPasswordReset  PostDropletActionRequestBody7TypeEnum = "password_reset"
	PostDropletActionRequestBody7TypeEnumResize         PostDropletActionRequestBody7TypeEnum = "resize"
	PostDropletActionRequestBody7TypeEnumRebuild        PostDropletActionRequestBody7TypeEnum = "rebuild"
	PostDropletActionRequestBody7TypeEnumRename         PostDropletActionRequestBody7TypeEnum = "rename"
	PostDropletActionRequestBody7TypeEnumChangeKernel   PostDropletActionRequestBody7TypeEnum = "change_kernel"
	PostDropletActionRequestBody7TypeEnumEnableIpv6     PostDropletActionRequestBody7TypeEnum = "enable_ipv6"
	PostDropletActionRequestBody7TypeEnumSnapshot       PostDropletActionRequestBody7TypeEnum = "snapshot"
)

type PostDropletActionRequestBody7 struct {
	Name *string                               `json:"name"`
	Type PostDropletActionRequestBody7TypeEnum `json:"type"`
}

type PostDropletActionRequest struct {
	PathParams PostDropletActionPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type PostDropletAction401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type PostDropletActionResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	PostDropletAction201ApplicationJSONAny                    *interface{}
	PostDropletAction401ApplicationJSONObject                 *PostDropletAction401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
