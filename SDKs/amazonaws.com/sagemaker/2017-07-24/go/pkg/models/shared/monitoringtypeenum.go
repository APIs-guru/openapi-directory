package shared




type MonitoringTypeEnum string

const (
    MonitoringTypeEnumDataQuality MonitoringTypeEnum = "DataQuality"
MonitoringTypeEnumModelQuality MonitoringTypeEnum = "ModelQuality"
MonitoringTypeEnumModelBias MonitoringTypeEnum = "ModelBias"
MonitoringTypeEnumModelExplainability MonitoringTypeEnum = "ModelExplainability"
)


