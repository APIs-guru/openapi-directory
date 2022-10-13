from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import stringhparamsearchspace
from . import inthparamsearchspace
from . import stringhparamsearchspace
from . import doublehparamsearchspace
from . import doublehparamsearchspace
from . import doublehparamsearchspace
from . import stringhparamsearchspace
from . import doublehparamsearchspace
from . import intarrayhparamsearchspace
from . import doublehparamsearchspace
from . import doublehparamsearchspace
from . import doublehparamsearchspace
from . import inthparamsearchspace
from . import doublehparamsearchspace
from . import inthparamsearchspace
from . import inthparamsearchspace
from . import inthparamsearchspace
from . import inthparamsearchspace
from . import stringhparamsearchspace
from . import doublehparamsearchspace
from . import stringhparamsearchspace
from . import doublehparamsearchspace


@dataclass_json
@dataclass
class HparamSearchSpaces:
    activation_fn: Optional[stringhparamsearchspace.StringHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activationFn' }})
    batch_size: Optional[inthparamsearchspace.IntHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchSize' }})
    booster_type: Optional[stringhparamsearchspace.StringHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boosterType' }})
    colsample_bylevel: Optional[doublehparamsearchspace.DoubleHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colsampleBylevel' }})
    colsample_bynode: Optional[doublehparamsearchspace.DoubleHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colsampleBynode' }})
    colsample_bytree: Optional[doublehparamsearchspace.DoubleHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colsampleBytree' }})
    dart_normalize_type: Optional[stringhparamsearchspace.StringHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dartNormalizeType' }})
    dropout: Optional[doublehparamsearchspace.DoubleHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dropout' }})
    hidden_units: Optional[intarrayhparamsearchspace.IntArrayHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hiddenUnits' }})
    l1_reg: Optional[doublehparamsearchspace.DoubleHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'l1Reg' }})
    l2_reg: Optional[doublehparamsearchspace.DoubleHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'l2Reg' }})
    learn_rate: Optional[doublehparamsearchspace.DoubleHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'learnRate' }})
    max_tree_depth: Optional[inthparamsearchspace.IntHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxTreeDepth' }})
    min_split_loss: Optional[doublehparamsearchspace.DoubleHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minSplitLoss' }})
    min_tree_child_weight: Optional[inthparamsearchspace.IntHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minTreeChildWeight' }})
    num_clusters: Optional[inthparamsearchspace.IntHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numClusters' }})
    num_factors: Optional[inthparamsearchspace.IntHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numFactors' }})
    num_parallel_tree: Optional[inthparamsearchspace.IntHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numParallelTree' }})
    optimizer: Optional[stringhparamsearchspace.StringHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optimizer' }})
    subsample: Optional[doublehparamsearchspace.DoubleHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subsample' }})
    tree_method: Optional[stringhparamsearchspace.StringHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'treeMethod' }})
    wals_alpha: Optional[doublehparamsearchspace.DoubleHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'walsAlpha' }})
    
