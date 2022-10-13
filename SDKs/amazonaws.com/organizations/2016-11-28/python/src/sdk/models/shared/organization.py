from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import policytypesummary
from . import organizationfeatureset_enum


@dataclass_json
@dataclass
class Organization:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    available_policy_types: Optional[List[policytypesummary.PolicyTypeSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailablePolicyTypes' }})
    feature_set: Optional[organizationfeatureset_enum.OrganizationFeatureSetEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeatureSet' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    master_account_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MasterAccountArn' }})
    master_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MasterAccountEmail' }})
    master_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MasterAccountId' }})
    
