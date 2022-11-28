from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class SslCertificateValidationLevelEnum(str, Enum):
    DOMAIN_VALIDATED = "domain_validated"
    ORGANIZATION_VALIDATED = "organization_validated"
    EXTENDED_VALIDATED = "extended_validated"

