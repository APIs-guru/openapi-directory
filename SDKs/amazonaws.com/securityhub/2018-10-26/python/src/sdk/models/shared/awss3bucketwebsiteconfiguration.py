from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awss3bucketwebsiteconfigurationredirectto
from . import awss3bucketwebsiteconfigurationroutingrule


@dataclass_json
@dataclass
class AwsS3BucketWebsiteConfiguration:
    error_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorDocument' }})
    index_document_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexDocumentSuffix' }})
    redirect_all_requests_to: Optional[awss3bucketwebsiteconfigurationredirectto.AwsS3BucketWebsiteConfigurationRedirectTo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RedirectAllRequestsTo' }})
    routing_rules: Optional[List[awss3bucketwebsiteconfigurationroutingrule.AwsS3BucketWebsiteConfigurationRoutingRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoutingRules' }})
    
