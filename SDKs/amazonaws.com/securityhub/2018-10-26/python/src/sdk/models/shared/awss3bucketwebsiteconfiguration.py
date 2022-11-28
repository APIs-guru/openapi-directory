from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsS3BucketWebsiteConfiguration:
    r"""AwsS3BucketWebsiteConfiguration
    Website parameters for the S3 bucket.
    """
    
    error_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorDocument') }})
    index_document_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexDocumentSuffix') }})
    redirect_all_requests_to: Optional[AwsS3BucketWebsiteConfigurationRedirectTo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedirectAllRequestsTo') }})
    routing_rules: Optional[List[AwsS3BucketWebsiteConfigurationRoutingRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoutingRules') }})
    
