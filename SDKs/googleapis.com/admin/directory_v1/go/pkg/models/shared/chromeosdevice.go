package shared

import (
	"time"
)

type ChromeOsDeviceActiveTimeRanges struct {
	ActiveTime *int32     `json:"activeTime"`
	Date       *time.Time `json:"date"`
}

type ChromeOsDeviceCPUInfoLogicalCpusCStates struct {
	DisplayName     *string `json:"displayName"`
	SessionDuration *string `json:"sessionDuration"`
}

type ChromeOsDeviceCPUInfoLogicalCpus struct {
	CStates                    []ChromeOsDeviceCPUInfoLogicalCpusCStates `json:"cStates"`
	CurrentScalingFrequencyKhz *int32                                    `json:"currentScalingFrequencyKhz"`
	IdleDuration               *string                                   `json:"idleDuration"`
	MaxScalingFrequencyKhz     *int32                                    `json:"maxScalingFrequencyKhz"`
}

type ChromeOsDeviceCPUInfo struct {
	Architecture     *string                            `json:"architecture"`
	LogicalCpus      []ChromeOsDeviceCPUInfoLogicalCpus `json:"logicalCpus"`
	MaxClockSpeedKhz *int32                             `json:"maxClockSpeedKhz"`
	Model            *string                            `json:"model"`
}

type ChromeOsDeviceCPUStatusReportsCPUTemperatureInfo struct {
	Label       *string `json:"label"`
	Temperature *int32  `json:"temperature"`
}

type ChromeOsDeviceCPUStatusReports struct {
	CPUTemperatureInfo           []ChromeOsDeviceCPUStatusReportsCPUTemperatureInfo `json:"cpuTemperatureInfo"`
	CPUUtilizationPercentageInfo []int32                                            `json:"cpuUtilizationPercentageInfo"`
	ReportTime                   *time.Time                                         `json:"reportTime"`
}

type ChromeOsDeviceDeviceFiles struct {
	CreateTime  *time.Time `json:"createTime"`
	DownloadURL *string    `json:"downloadUrl"`
	Name        *string    `json:"name"`
	Type        *string    `json:"type"`
}

type ChromeOsDeviceDiskVolumeReportsVolumeInfo struct {
	StorageFree  *string `json:"storageFree"`
	StorageTotal *string `json:"storageTotal"`
	VolumeID     *string `json:"volumeId"`
}

type ChromeOsDeviceDiskVolumeReports struct {
	VolumeInfo []ChromeOsDeviceDiskVolumeReportsVolumeInfo `json:"volumeInfo"`
}

type ChromeOsDeviceLastKnownNetwork struct {
	IPAddress    *string `json:"ipAddress"`
	WanIPAddress *string `json:"wanIpAddress"`
}

type ChromeOsDeviceRecentUsers struct {
	Email *string `json:"email"`
	Type  *string `json:"type"`
}

type ChromeOsDeviceScreenshotFiles struct {
	CreateTime  *time.Time `json:"createTime"`
	DownloadURL *string    `json:"downloadUrl"`
	Name        *string    `json:"name"`
	Type        *string    `json:"type"`
}

type ChromeOsDeviceSystemRAMFreeReports struct {
	ReportTime        *time.Time `json:"reportTime"`
	SystemRAMFreeInfo []string   `json:"systemRamFreeInfo"`
}

type ChromeOsDeviceTpmVersionInfo struct {
	Family          *string `json:"family"`
	FirmwareVersion *string `json:"firmwareVersion"`
	Manufacturer    *string `json:"manufacturer"`
	SpecLevel       *string `json:"specLevel"`
	TpmModel        *string `json:"tpmModel"`
	VendorSpecific  *string `json:"vendorSpecific"`
}

type ChromeOsDevice struct {
	ActiveTimeRanges     []ChromeOsDeviceActiveTimeRanges     `json:"activeTimeRanges"`
	AnnotatedAssetID     *string                              `json:"annotatedAssetId"`
	AnnotatedLocation    *string                              `json:"annotatedLocation"`
	AnnotatedUser        *string                              `json:"annotatedUser"`
	AutoUpdateExpiration *string                              `json:"autoUpdateExpiration"`
	BootMode             *string                              `json:"bootMode"`
	CPUInfo              []ChromeOsDeviceCPUInfo              `json:"cpuInfo"`
	CPUStatusReports     []ChromeOsDeviceCPUStatusReports     `json:"cpuStatusReports"`
	DeviceFiles          []ChromeOsDeviceDeviceFiles          `json:"deviceFiles"`
	DeviceID             *string                              `json:"deviceId"`
	DiskVolumeReports    []ChromeOsDeviceDiskVolumeReports    `json:"diskVolumeReports"`
	DockMacAddress       *string                              `json:"dockMacAddress"`
	Etag                 *string                              `json:"etag"`
	EthernetMacAddress   *string                              `json:"ethernetMacAddress"`
	EthernetMacAddress0  *string                              `json:"ethernetMacAddress0"`
	FirmwareVersion      *string                              `json:"firmwareVersion"`
	FirstEnrollmentTime  *string                              `json:"firstEnrollmentTime"`
	Kind                 *string                              `json:"kind"`
	LastEnrollmentTime   *time.Time                           `json:"lastEnrollmentTime"`
	LastKnownNetwork     []ChromeOsDeviceLastKnownNetwork     `json:"lastKnownNetwork"`
	LastSync             *time.Time                           `json:"lastSync"`
	MacAddress           *string                              `json:"macAddress"`
	ManufactureDate      *string                              `json:"manufactureDate"`
	Meid                 *string                              `json:"meid"`
	Model                *string                              `json:"model"`
	Notes                *string                              `json:"notes"`
	OrderNumber          *string                              `json:"orderNumber"`
	OrgUnitID            *string                              `json:"orgUnitId"`
	OrgUnitPath          *string                              `json:"orgUnitPath"`
	OsUpdateStatus       *OsUpdateStatus                      `json:"osUpdateStatus"`
	OsVersion            *string                              `json:"osVersion"`
	PlatformVersion      *string                              `json:"platformVersion"`
	RecentUsers          []ChromeOsDeviceRecentUsers          `json:"recentUsers"`
	ScreenshotFiles      []ChromeOsDeviceScreenshotFiles      `json:"screenshotFiles"`
	SerialNumber         *string                              `json:"serialNumber"`
	Status               *string                              `json:"status"`
	SupportEndDate       *time.Time                           `json:"supportEndDate"`
	SystemRAMFreeReports []ChromeOsDeviceSystemRAMFreeReports `json:"systemRamFreeReports"`
	SystemRAMTotal       *string                              `json:"systemRamTotal"`
	TpmVersionInfo       *ChromeOsDeviceTpmVersionInfo        `json:"tpmVersionInfo"`
	WillAutoRenew        *bool                                `json:"willAutoRenew"`
}
