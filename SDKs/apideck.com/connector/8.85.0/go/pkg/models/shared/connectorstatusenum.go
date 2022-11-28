package shared

type ConnectorStatusEnum string

const (
	ConnectorStatusEnumLive        ConnectorStatusEnum = "live"
	ConnectorStatusEnumBeta        ConnectorStatusEnum = "beta"
	ConnectorStatusEnumDevelopment ConnectorStatusEnum = "development"
	ConnectorStatusEnumConsidering ConnectorStatusEnum = "considering"
)
