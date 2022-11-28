from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TrialComponentArtifact:
    r"""TrialComponentArtifact
    <p>Represents an input or output artifact of a trial component. You specify <code>TrialComponentArtifact</code> as part of the <code>InputArtifacts</code> and <code>OutputArtifacts</code> parameters in the <a>CreateTrialComponent</a> request.</p> <p>Examples of input artifacts are datasets, algorithms, hyperparameters, source code, and instance types. Examples of output artifacts are metrics, snapshots, logs, and images.</p>
    """
    
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    media_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaType') }})
    
