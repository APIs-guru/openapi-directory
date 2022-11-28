from dataclasses import dataclass, field
from enum import Enum

class DocumentTypeEnum(str, Enum):
    COMMAND = "Command"
    POLICY = "Policy"
    AUTOMATION = "Automation"
    SESSION = "Session"
    PACKAGE = "Package"
    APPLICATION_CONFIGURATION = "ApplicationConfiguration"
    APPLICATION_CONFIGURATION_SCHEMA = "ApplicationConfigurationSchema"
    DEPLOYMENT_STRATEGY = "DeploymentStrategy"
    CHANGE_CALENDAR = "ChangeCalendar"
    AUTOMATION_CHANGE_TEMPLATE = "Automation.ChangeTemplate"
    PROBLEM_ANALYSIS = "ProblemAnalysis"
    PROBLEM_ANALYSIS_TEMPLATE = "ProblemAnalysisTemplate"

