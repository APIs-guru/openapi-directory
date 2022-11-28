from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetOperationDetailRequest:
    r"""GetOperationDetailRequest
    The <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html\">GetOperationDetail</a> request includes the following element.
    """
    
    operation_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OperationId') }})
    
