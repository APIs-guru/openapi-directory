from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsElasticsearchDomainLogPublishingOptions:
    r"""AwsElasticsearchDomainLogPublishingOptions
    configures the CloudWatch Logs to publish for the Elasticsearch domain.
    """
    
    audit_logs: Optional[AwsElasticsearchDomainLogPublishingOptionsLogConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuditLogs') }})
    index_slow_logs: Optional[AwsElasticsearchDomainLogPublishingOptionsLogConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexSlowLogs') }})
    search_slow_logs: Optional[AwsElasticsearchDomainLogPublishingOptionsLogConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SearchSlowLogs') }})
    
