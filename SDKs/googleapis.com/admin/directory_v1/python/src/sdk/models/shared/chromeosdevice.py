from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import osupdatestatus


@dataclass_json
@dataclass
class ChromeOsDeviceActiveTimeRanges:
    active_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeTime' }})
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ChromeOsDeviceCPUInfoLogicalCpusCStates:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    session_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionDuration' }})
    

@dataclass_json
@dataclass
class ChromeOsDeviceCPUInfoLogicalCpus:
    c_states: Optional[List[ChromeOsDeviceCPUInfoLogicalCpusCStates]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cStates' }})
    current_scaling_frequency_khz: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentScalingFrequencyKhz' }})
    idle_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idleDuration' }})
    max_scaling_frequency_khz: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxScalingFrequencyKhz' }})
    

@dataclass_json
@dataclass
class ChromeOsDeviceCPUInfo:
    architecture: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'architecture' }})
    logical_cpus: Optional[List[ChromeOsDeviceCPUInfoLogicalCpus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logicalCpus' }})
    max_clock_speed_khz: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxClockSpeedKhz' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    

@dataclass_json
@dataclass
class ChromeOsDeviceCPUStatusReportsCPUTemperatureInfo:
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    temperature: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'temperature' }})
    

@dataclass_json
@dataclass
class ChromeOsDeviceCPUStatusReports:
    cpu_temperature_info: Optional[List[ChromeOsDeviceCPUStatusReportsCPUTemperatureInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuTemperatureInfo' }})
    cpu_utilization_percentage_info: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuUtilizationPercentageInfo' }})
    report_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ChromeOsDeviceDeviceFiles:
    create_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloadUrl' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class ChromeOsDeviceDiskVolumeReportsVolumeInfo:
    storage_free: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageFree' }})
    storage_total: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageTotal' }})
    volume_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeId' }})
    

@dataclass_json
@dataclass
class ChromeOsDeviceDiskVolumeReports:
    volume_info: Optional[List[ChromeOsDeviceDiskVolumeReportsVolumeInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeInfo' }})
    

@dataclass_json
@dataclass
class ChromeOsDeviceLastKnownNetwork:
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddress' }})
    wan_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wanIpAddress' }})
    

@dataclass_json
@dataclass
class ChromeOsDeviceRecentUsers:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class ChromeOsDeviceScreenshotFiles:
    create_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloadUrl' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class ChromeOsDeviceSystemRAMFreeReports:
    report_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    system_ram_free_info: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemRamFreeInfo' }})
    

@dataclass_json
@dataclass
class ChromeOsDeviceTpmVersionInfo:
    family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'family' }})
    firmware_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firmwareVersion' }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manufacturer' }})
    spec_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'specLevel' }})
    tpm_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tpmModel' }})
    vendor_specific: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vendorSpecific' }})
    

@dataclass_json
@dataclass
class ChromeOsDevice:
    active_time_ranges: Optional[List[ChromeOsDeviceActiveTimeRanges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeTimeRanges' }})
    annotated_asset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotatedAssetId' }})
    annotated_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotatedLocation' }})
    annotated_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotatedUser' }})
    auto_update_expiration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoUpdateExpiration' }})
    boot_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootMode' }})
    cpu_info: Optional[List[ChromeOsDeviceCPUInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuInfo' }})
    cpu_status_reports: Optional[List[ChromeOsDeviceCPUStatusReports]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuStatusReports' }})
    device_files: Optional[List[ChromeOsDeviceDeviceFiles]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceFiles' }})
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceId' }})
    disk_volume_reports: Optional[List[ChromeOsDeviceDiskVolumeReports]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskVolumeReports' }})
    dock_mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockMacAddress' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    ethernet_mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ethernetMacAddress' }})
    ethernet_mac_address0: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ethernetMacAddress0' }})
    firmware_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firmwareVersion' }})
    first_enrollment_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstEnrollmentTime' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    last_enrollment_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastEnrollmentTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_known_network: Optional[List[ChromeOsDeviceLastKnownNetwork]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastKnownNetwork' }})
    last_sync: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastSync', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'macAddress' }})
    manufacture_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manufactureDate' }})
    meid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meid' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    order_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderNumber' }})
    org_unit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orgUnitId' }})
    org_unit_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orgUnitPath' }})
    os_update_status: Optional[osupdatestatus.OsUpdateStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osUpdateStatus' }})
    os_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osVersion' }})
    platform_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platformVersion' }})
    recent_users: Optional[List[ChromeOsDeviceRecentUsers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recentUsers' }})
    screenshot_files: Optional[List[ChromeOsDeviceScreenshotFiles]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'screenshotFiles' }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serialNumber' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    support_end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportEndDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    system_ram_free_reports: Optional[List[ChromeOsDeviceSystemRAMFreeReports]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemRamFreeReports' }})
    system_ram_total: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemRamTotal' }})
    tpm_version_info: Optional[ChromeOsDeviceTpmVersionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tpmVersionInfo' }})
    will_auto_renew: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'willAutoRenew' }})
    
