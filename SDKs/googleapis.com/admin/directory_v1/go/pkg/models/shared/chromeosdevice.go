package shared

import (
	"time"
)

type ChromeOsDeviceActiveTimeRanges struct {
	ActiveTime *int32     `json:"activeTime,omitempty"`
	Date       *time.Time `json:"date,omitempty"`
}

type ChromeOsDeviceCPUInfoLogicalCpusCStates struct {
	DisplayName     *string `json:"displayName,omitempty"`
	SessionDuration *string `json:"sessionDuration,omitempty"`
}

type ChromeOsDeviceCPUInfoLogicalCpus struct {
	CStates                    []ChromeOsDeviceCPUInfoLogicalCpusCStates `json:"cStates,omitempty"`
	CurrentScalingFrequencyKhz *int32                                    `json:"currentScalingFrequencyKhz,omitempty"`
	IdleDuration               *string                                   `json:"idleDuration,omitempty"`
	MaxScalingFrequencyKhz     *int32                                    `json:"maxScalingFrequencyKhz,omitempty"`
}

type ChromeOsDeviceCPUInfo struct {
	Architecture     *string                            `json:"architecture,omitempty"`
	LogicalCpus      []ChromeOsDeviceCPUInfoLogicalCpus `json:"logicalCpus,omitempty"`
	MaxClockSpeedKhz *int32                             `json:"maxClockSpeedKhz,omitempty"`
	Model            *string                            `json:"model,omitempty"`
}

type ChromeOsDeviceCPUStatusReportsCPUTemperatureInfo struct {
	Label       *string `json:"label,omitempty"`
	Temperature *int32  `json:"temperature,omitempty"`
}

type ChromeOsDeviceCPUStatusReports struct {
	CPUTemperatureInfo           []ChromeOsDeviceCPUStatusReportsCPUTemperatureInfo `json:"cpuTemperatureInfo,omitempty"`
	CPUUtilizationPercentageInfo []int32                                            `json:"cpuUtilizationPercentageInfo,omitempty"`
	ReportTime                   *time.Time                                         `json:"reportTime,omitempty"`
}

type ChromeOsDeviceDeviceFiles struct {
	CreateTime  *time.Time `json:"createTime,omitempty"`
	DownloadURL *string    `json:"downloadUrl,omitempty"`
	Name        *string    `json:"name,omitempty"`
	Type        *string    `json:"type,omitempty"`
}

type ChromeOsDeviceDiskVolumeReportsVolumeInfo struct {
	StorageFree  *string `json:"storageFree,omitempty"`
	StorageTotal *string `json:"storageTotal,omitempty"`
	VolumeID     *string `json:"volumeId,omitempty"`
}

type ChromeOsDeviceDiskVolumeReports struct {
	VolumeInfo []ChromeOsDeviceDiskVolumeReportsVolumeInfo `json:"volumeInfo,omitempty"`
}

type ChromeOsDeviceLastKnownNetwork struct {
	IPAddress    *string `json:"ipAddress,omitempty"`
	WanIPAddress *string `json:"wanIpAddress,omitempty"`
}

type ChromeOsDeviceRecentUsers struct {
	Email *string `json:"email,omitempty"`
	Type  *string `json:"type,omitempty"`
}

type ChromeOsDeviceScreenshotFiles struct {
	CreateTime  *time.Time `json:"createTime,omitempty"`
	DownloadURL *string    `json:"downloadUrl,omitempty"`
	Name        *string    `json:"name,omitempty"`
	Type        *string    `json:"type,omitempty"`
}

type ChromeOsDeviceSystemRAMFreeReports struct {
	ReportTime        *time.Time `json:"reportTime,omitempty"`
	SystemRAMFreeInfo []string   `json:"systemRamFreeInfo,omitempty"`
}

type ChromeOsDeviceTpmVersionInfo struct {
	Family          *string `json:"family,omitempty"`
	FirmwareVersion *string `json:"firmwareVersion,omitempty"`
	Manufacturer    *string `json:"manufacturer,omitempty"`
	SpecLevel       *string `json:"specLevel,omitempty"`
	TpmModel        *string `json:"tpmModel,omitempty"`
	VendorSpecific  *string `json:"vendorSpecific,omitempty"`
}

type ChromeOsDevice struct {
	ActiveTimeRanges     []ChromeOsDeviceActiveTimeRanges     `json:"activeTimeRanges,omitempty"`
	AnnotatedAssetID     *string                              `json:"annotatedAssetId,omitempty"`
	AnnotatedLocation    *string                              `json:"annotatedLocation,omitempty"`
	AnnotatedUser        *string                              `json:"annotatedUser,omitempty"`
	AutoUpdateExpiration *string                              `json:"autoUpdateExpiration,omitempty"`
	BootMode             *string                              `json:"bootMode,omitempty"`
	CPUInfo              []ChromeOsDeviceCPUInfo              `json:"cpuInfo,omitempty"`
	CPUStatusReports     []ChromeOsDeviceCPUStatusReports     `json:"cpuStatusReports,omitempty"`
	DeviceFiles          []ChromeOsDeviceDeviceFiles          `json:"deviceFiles,omitempty"`
	DeviceID             *string                              `json:"deviceId,omitempty"`
	DiskVolumeReports    []ChromeOsDeviceDiskVolumeReports    `json:"diskVolumeReports,omitempty"`
	DockMacAddress       *string                              `json:"dockMacAddress,omitempty"`
	Etag                 *string                              `json:"etag,omitempty"`
	EthernetMacAddress   *string                              `json:"ethernetMacAddress,omitempty"`
	EthernetMacAddress0  *string                              `json:"ethernetMacAddress0,omitempty"`
	FirmwareVersion      *string                              `json:"firmwareVersion,omitempty"`
	FirstEnrollmentTime  *string                              `json:"firstEnrollmentTime,omitempty"`
	Kind                 *string                              `json:"kind,omitempty"`
	LastEnrollmentTime   *time.Time                           `json:"lastEnrollmentTime,omitempty"`
	LastKnownNetwork     []ChromeOsDeviceLastKnownNetwork     `json:"lastKnownNetwork,omitempty"`
	LastSync             *time.Time                           `json:"lastSync,omitempty"`
	MacAddress           *string                              `json:"macAddress,omitempty"`
	ManufactureDate      *string                              `json:"manufactureDate,omitempty"`
	Meid                 *string                              `json:"meid,omitempty"`
	Model                *string                              `json:"model,omitempty"`
	Notes                *string                              `json:"notes,omitempty"`
	OrderNumber          *string                              `json:"orderNumber,omitempty"`
	OrgUnitID            *string                              `json:"orgUnitId,omitempty"`
	OrgUnitPath          *string                              `json:"orgUnitPath,omitempty"`
	OsUpdateStatus       *OsUpdateStatus                      `json:"osUpdateStatus,omitempty"`
	OsVersion            *string                              `json:"osVersion,omitempty"`
	PlatformVersion      *string                              `json:"platformVersion,omitempty"`
	RecentUsers          []ChromeOsDeviceRecentUsers          `json:"recentUsers,omitempty"`
	ScreenshotFiles      []ChromeOsDeviceScreenshotFiles      `json:"screenshotFiles,omitempty"`
	SerialNumber         *string                              `json:"serialNumber,omitempty"`
	Status               *string                              `json:"status,omitempty"`
	SupportEndDate       *time.Time                           `json:"supportEndDate,omitempty"`
	SystemRAMFreeReports []ChromeOsDeviceSystemRAMFreeReports `json:"systemRamFreeReports,omitempty"`
	SystemRAMTotal       *string                              `json:"systemRamTotal,omitempty"`
	TpmVersionInfo       *ChromeOsDeviceTpmVersionInfo        `json:"tpmVersionInfo,omitempty"`
	WillAutoRenew        *bool                                `json:"willAutoRenew,omitempty"`
}
