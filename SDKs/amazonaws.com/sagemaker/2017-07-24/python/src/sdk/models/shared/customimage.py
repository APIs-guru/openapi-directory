from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CustomImage:
    r"""CustomImage
    A custom SageMaker image. For more information, see <a href=\"https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html\">Bring your own SageMaker image</a>.
    """
    
    app_image_config_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppImageConfigName') }})
    image_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageName') }})
    image_version_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageVersionNumber') }})
    
