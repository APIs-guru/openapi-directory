from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsS3BucketWebsiteConfigurationRoutingRuleCondition:
    http_error_code_returned_equals: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HttpErrorCodeReturnedEquals' }})
    key_prefix_equals: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyPrefixEquals' }})
    
