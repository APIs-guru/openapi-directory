package shared

type DocumentTypeEnum string

const (
	DocumentTypeEnumCommand                        DocumentTypeEnum = "Command"
	DocumentTypeEnumPolicy                         DocumentTypeEnum = "Policy"
	DocumentTypeEnumAutomation                     DocumentTypeEnum = "Automation"
	DocumentTypeEnumSession                        DocumentTypeEnum = "Session"
	DocumentTypeEnumPackage                        DocumentTypeEnum = "Package"
	DocumentTypeEnumApplicationConfiguration       DocumentTypeEnum = "ApplicationConfiguration"
	DocumentTypeEnumApplicationConfigurationSchema DocumentTypeEnum = "ApplicationConfigurationSchema"
	DocumentTypeEnumDeploymentStrategy             DocumentTypeEnum = "DeploymentStrategy"
	DocumentTypeEnumChangeCalendar                 DocumentTypeEnum = "ChangeCalendar"
	DocumentTypeEnumAutomationChangeTemplate       DocumentTypeEnum = "Automation.ChangeTemplate"
	DocumentTypeEnumProblemAnalysis                DocumentTypeEnum = "ProblemAnalysis"
	DocumentTypeEnumProblemAnalysisTemplate        DocumentTypeEnum = "ProblemAnalysisTemplate"
)
