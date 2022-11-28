from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SourceAlgorithm:
    r"""SourceAlgorithm
    Specifies an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your Amazon SageMaker account or an algorithm in Amazon Web Services Marketplace that you are subscribed to.
    """
    
    algorithm_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlgorithmName') }})
    model_data_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelDataUrl') }})
    
