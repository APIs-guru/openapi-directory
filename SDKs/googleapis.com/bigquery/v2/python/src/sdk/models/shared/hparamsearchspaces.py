from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HparamSearchSpaces:
    r"""HparamSearchSpaces
    Hyperparameter search spaces. These should be a subset of training_options.
    """
    
    activation_fn: Optional[StringHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activationFn') }})
    batch_size: Optional[IntHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchSize') }})
    booster_type: Optional[StringHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boosterType') }})
    colsample_bylevel: Optional[DoubleHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colsampleBylevel') }})
    colsample_bynode: Optional[DoubleHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colsampleBynode') }})
    colsample_bytree: Optional[DoubleHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colsampleBytree') }})
    dart_normalize_type: Optional[StringHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dartNormalizeType') }})
    dropout: Optional[DoubleHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dropout') }})
    hidden_units: Optional[IntArrayHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiddenUnits') }})
    l1_reg: Optional[DoubleHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('l1Reg') }})
    l2_reg: Optional[DoubleHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('l2Reg') }})
    learn_rate: Optional[DoubleHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('learnRate') }})
    max_tree_depth: Optional[IntHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxTreeDepth') }})
    min_split_loss: Optional[DoubleHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minSplitLoss') }})
    min_tree_child_weight: Optional[IntHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minTreeChildWeight') }})
    num_clusters: Optional[IntHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numClusters') }})
    num_factors: Optional[IntHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numFactors') }})
    num_parallel_tree: Optional[IntHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numParallelTree') }})
    optimizer: Optional[StringHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optimizer') }})
    subsample: Optional[DoubleHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subsample') }})
    tree_method: Optional[StringHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('treeMethod') }})
    wals_alpha: Optional[DoubleHparamSearchSpace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('walsAlpha') }})
    
