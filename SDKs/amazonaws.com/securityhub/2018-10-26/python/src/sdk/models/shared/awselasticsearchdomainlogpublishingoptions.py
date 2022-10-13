from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awselasticsearchdomainlogpublishingoptionslogconfig
from . import awselasticsearchdomainlogpublishingoptionslogconfig
from . import awselasticsearchdomainlogpublishingoptionslogconfig


@dataclass_json
@dataclass
class AwsElasticsearchDomainLogPublishingOptions:
    audit_logs: Optional[awselasticsearchdomainlogpublishingoptionslogconfig.AwsElasticsearchDomainLogPublishingOptionsLogConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuditLogs' }})
    index_slow_logs: Optional[awselasticsearchdomainlogpublishingoptionslogconfig.AwsElasticsearchDomainLogPublishingOptionsLogConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexSlowLogs' }})
    search_slow_logs: Optional[awselasticsearchdomainlogpublishingoptionslogconfig.AwsElasticsearchDomainLogPublishingOptionsLogConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SearchSlowLogs' }})
    
