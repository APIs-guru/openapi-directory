package shared

type ConnectorCapabilityEnum string

const (
	ConnectorCapabilityEnumVsphere          ConnectorCapabilityEnum = "VSPHERE"
	ConnectorCapabilityEnumScvmm            ConnectorCapabilityEnum = "SCVMM"
	ConnectorCapabilityEnumHypervManager    ConnectorCapabilityEnum = "HYPERV-MANAGER"
	ConnectorCapabilityEnumSnapshotBatching ConnectorCapabilityEnum = "SNAPSHOT_BATCHING"
	ConnectorCapabilityEnumSmsOptimized     ConnectorCapabilityEnum = "SMS_OPTIMIZED"
)
