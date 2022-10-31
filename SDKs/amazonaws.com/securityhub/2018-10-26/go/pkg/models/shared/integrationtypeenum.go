package shared




type IntegrationTypeEnum string

const (
    IntegrationTypeEnumSendFindingsToSecurityHub IntegrationTypeEnum = "SEND_FINDINGS_TO_SECURITY_HUB"
IntegrationTypeEnumReceiveFindingsFromSecurityHub IntegrationTypeEnum = "RECEIVE_FINDINGS_FROM_SECURITY_HUB"
IntegrationTypeEnumUpdateFindingsInSecurityHub IntegrationTypeEnum = "UPDATE_FINDINGS_IN_SECURITY_HUB"
)


