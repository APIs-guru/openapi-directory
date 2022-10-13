from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsS3BucketWebsiteConfigurationRoutingRuleRedirect:
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Hostname' }})
    http_redirect_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HttpRedirectCode' }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Protocol' }})
    replace_key_prefix_with: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplaceKeyPrefixWith' }})
    replace_key_with: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplaceKeyWith' }})
    
