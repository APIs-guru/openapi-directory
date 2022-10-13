from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import organizationconfiguration


@dataclass_json
@dataclass
class GetServiceSettingsResponse:
    enable_cross_accounts_discovery: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableCrossAccountsDiscovery' }})
    license_manager_resource_share_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseManagerResourceShareArn' }})
    organization_configuration: Optional[organizationconfiguration.OrganizationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationConfiguration' }})
    s3_bucket_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BucketArn' }})
    sns_topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnsTopicArn' }})
    
