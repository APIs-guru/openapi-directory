from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import encryptionconfiguration
from . import standardsqlfield
from . import hparamsearchspaces
from . import hparamtuningtrial
from . import standardsqlfield
from . import modelreference
from . import trainingrun

class ModelModelTypeEnum(str, Enum):
    MODEL_TYPE_UNSPECIFIED = "MODEL_TYPE_UNSPECIFIED"
    LINEAR_REGRESSION = "LINEAR_REGRESSION"
    LOGISTIC_REGRESSION = "LOGISTIC_REGRESSION"
    KMEANS = "KMEANS"
    MATRIX_FACTORIZATION = "MATRIX_FACTORIZATION"
    DNN_CLASSIFIER = "DNN_CLASSIFIER"
    TENSORFLOW = "TENSORFLOW"
    DNN_REGRESSOR = "DNN_REGRESSOR"
    BOOSTED_TREE_REGRESSOR = "BOOSTED_TREE_REGRESSOR"
    BOOSTED_TREE_CLASSIFIER = "BOOSTED_TREE_CLASSIFIER"
    ARIMA = "ARIMA"
    AUTOML_REGRESSOR = "AUTOML_REGRESSOR"
    AUTOML_CLASSIFIER = "AUTOML_CLASSIFIER"
    PCA = "PCA"
    DNN_LINEAR_COMBINED_CLASSIFIER = "DNN_LINEAR_COMBINED_CLASSIFIER"
    DNN_LINEAR_COMBINED_REGRESSOR = "DNN_LINEAR_COMBINED_REGRESSOR"
    AUTOENCODER = "AUTOENCODER"
    ARIMA_PLUS = "ARIMA_PLUS"


@dataclass_json
@dataclass
class Model:
    best_trial_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bestTrialId' }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    default_trial_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultTrialId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    encryption_configuration: Optional[encryptionconfiguration.EncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionConfiguration' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    expiration_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationTime' }})
    feature_columns: Optional[List[standardsqlfield.StandardSQLField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featureColumns' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendlyName' }})
    hparam_search_spaces: Optional[hparamsearchspaces.HparamSearchSpaces] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hparamSearchSpaces' }})
    hparam_trials: Optional[List[hparamtuningtrial.HparamTuningTrial]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hparamTrials' }})
    label_columns: Optional[List[standardsqlfield.StandardSQLField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelColumns' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    last_modified_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedTime' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    model_reference: Optional[modelreference.ModelReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelReference' }})
    model_type: Optional[ModelModelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelType' }})
    optimal_trial_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optimalTrialIds' }})
    training_runs: Optional[List[trainingrun.TrainingRun]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainingRuns' }})
    
