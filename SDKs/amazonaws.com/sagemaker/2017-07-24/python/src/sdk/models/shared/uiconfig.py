from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UIConfig:
    r"""UIConfig
    <p>Provided configuration information for the worker UI for a labeling job. Provide either <code>HumanTaskUiArn</code> or <code>UiTemplateS3Uri</code>.</p> <p>For named entity recognition, 3D point cloud and video frame labeling jobs, use <code>HumanTaskUiArn</code>.</p> <p>For all other Ground Truth built-in task types and custom task types, use <code>UiTemplateS3Uri</code> to specify the location of a worker task template in Amazon S3.</p>
    """
    
    human_task_ui_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanTaskUiArn') }})
    ui_template_s3_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UiTemplateS3Uri') }})
    
