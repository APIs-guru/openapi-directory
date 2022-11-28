package shared

type AquaStatusEnum string

const (
	AquaStatusEnumEnabled  AquaStatusEnum = "enabled"
	AquaStatusEnumDisabled AquaStatusEnum = "disabled"
	AquaStatusEnumApplying AquaStatusEnum = "applying"
)
