package shared




type ProvisionedProductStatusEnum string

const (
    ProvisionedProductStatusEnumAvailable ProvisionedProductStatusEnum = "AVAILABLE"
ProvisionedProductStatusEnumUnderChange ProvisionedProductStatusEnum = "UNDER_CHANGE"
ProvisionedProductStatusEnumTainted ProvisionedProductStatusEnum = "TAINTED"
ProvisionedProductStatusEnumError ProvisionedProductStatusEnum = "ERROR"
ProvisionedProductStatusEnumPlanInProgress ProvisionedProductStatusEnum = "PLAN_IN_PROGRESS"
)


