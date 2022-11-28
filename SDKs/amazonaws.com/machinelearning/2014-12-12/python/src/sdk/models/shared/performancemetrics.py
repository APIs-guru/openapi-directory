from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PerformanceMetrics:
    r"""PerformanceMetrics
    <p>Measurements of how well the <code>MLModel</code> performed on known observations. One of the following metrics is returned, based on the type of the <code>MLModel</code>: </p> <ul> <li> <p>BinaryAUC: The binary <code>MLModel</code> uses the Area Under the Curve (AUC) technique to measure performance. </p> </li> <li> <p>RegressionRMSE: The regression <code>MLModel</code> uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.</p> </li> <li> <p>MulticlassAvgFScore: The multiclass <code>MLModel</code> uses the F1 score technique to measure performance. </p> </li> </ul> <p> For more information about performance metrics, please see the <a href=\"https://docs.aws.amazon.com/machine-learning/latest/dg\">Amazon Machine Learning Developer Guide</a>. </p>
    """
    
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Properties') }})
    
