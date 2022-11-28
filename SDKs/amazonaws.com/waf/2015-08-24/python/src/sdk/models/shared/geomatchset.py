from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GeoMatchSet:
    r"""GeoMatchSet
    <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href=\"https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html\">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href=\"https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html\">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains one or more countries that AWS WAF will search for.</p>
    """
    
    geo_match_constraints: List[GeoMatchConstraint] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GeoMatchConstraints') }})
    geo_match_set_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GeoMatchSetId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
