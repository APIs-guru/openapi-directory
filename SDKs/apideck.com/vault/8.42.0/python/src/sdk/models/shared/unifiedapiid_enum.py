from dataclasses import dataclass, field
from typing import Enum

class UnifiedAPIIDEnum(str, Enum):
    VAULT = "vault"
    LEAD = "lead"
    CRM = "crm"
    ACCOUNTING = "accounting"
    FILE_STORAGE = "file-storage"
    SPREADSHEET = "spreadsheet"
    EMAIL = "email"
    SCRIPT = "script"
    SMS = "sms"
    TEAM_MESSAGING = "team-messaging"
    ECOMMERCE = "ecommerce"
    PAYROLL = "payroll"
    CUSTOMER_SUPPORT = "customer-support"
    TIME_REGISTRATION = "time-registration"
    TRANSACTIONAL_EMAIL = "transactional-email"
    HCM = "hcm"
    FORM = "form"
    CSP = "csp"
    EMAIL_MARKETING = "email-marketing"
    ATS = "ats"
    HRIS = "hris"
    POS = "pos"

