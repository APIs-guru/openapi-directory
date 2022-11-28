from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateServiceSettingsRequest:
    enable_cross_accounts_discovery: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableCrossAccountsDiscovery') }})
    organization_configuration: Optional[OrganizationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationConfiguration') }})
    s3_bucket_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BucketArn') }})
    sns_topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnsTopicArn') }})
    
