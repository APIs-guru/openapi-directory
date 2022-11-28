from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LoggingConfiguration:
    r"""LoggingConfiguration
    <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href=\"https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html\">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href=\"https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html\">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The Amazon Kinesis Data Firehose, <code>RedactedFields</code> information, and the web ACL Amazon Resource Name (ARN).</p>
    """
    
    log_destination_configs: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogDestinationConfigs') }})
    resource_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceArn') }})
    redacted_fields: Optional[List[FieldToMatch]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedactedFields') }})
    
