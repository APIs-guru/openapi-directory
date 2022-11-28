import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { HparamSearchSpaces } from "./hparamsearchspaces";
import { ModelReference } from "./modelreference";
import { TrainingRunInput } from "./trainingrun";
import { StandardSqlField } from "./standardsqlfield";
import { HparamTuningTrial } from "./hparamtuningtrial";
import { TrainingRun } from "./trainingrun";


export enum ModelModelTypeEnum {
    ModelTypeUnspecified = "MODEL_TYPE_UNSPECIFIED",
    LinearRegression = "LINEAR_REGRESSION",
    LogisticRegression = "LOGISTIC_REGRESSION",
    Kmeans = "KMEANS",
    MatrixFactorization = "MATRIX_FACTORIZATION",
    DnnClassifier = "DNN_CLASSIFIER",
    Tensorflow = "TENSORFLOW",
    DnnRegressor = "DNN_REGRESSOR",
    BoostedTreeRegressor = "BOOSTED_TREE_REGRESSOR",
    BoostedTreeClassifier = "BOOSTED_TREE_CLASSIFIER",
    Arima = "ARIMA",
    AutomlRegressor = "AUTOML_REGRESSOR",
    AutomlClassifier = "AUTOML_CLASSIFIER",
    Pca = "PCA",
    DnnLinearCombinedClassifier = "DNN_LINEAR_COMBINED_CLASSIFIER",
    DnnLinearCombinedRegressor = "DNN_LINEAR_COMBINED_REGRESSOR",
    Autoencoder = "AUTOENCODER",
    ArimaPlus = "ARIMA_PLUS",
    RandomForestRegressor = "RANDOM_FOREST_REGRESSOR",
    RandomForestClassifier = "RANDOM_FOREST_CLASSIFIER"
}


export class ModelInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bestTrialId" })
  bestTrialId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=encryptionConfiguration" })
  encryptionConfiguration?: EncryptionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=expirationTime" })
  expirationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=friendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=hparamSearchSpaces" })
  hparamSearchSpaces?: HparamSearchSpaces;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=modelReference" })
  modelReference?: ModelReference;

  @SpeakeasyMetadata({ data: "json, name=trainingRuns", elemType: TrainingRunInput })
  trainingRuns?: TrainingRunInput[];
}


export class Model extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bestTrialId" })
  bestTrialId?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultTrialId" })
  defaultTrialId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=encryptionConfiguration" })
  encryptionConfiguration?: EncryptionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=expirationTime" })
  expirationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=featureColumns", elemType: StandardSqlField })
  featureColumns?: StandardSqlField[];

  @SpeakeasyMetadata({ data: "json, name=friendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=hparamSearchSpaces" })
  hparamSearchSpaces?: HparamSearchSpaces;

  @SpeakeasyMetadata({ data: "json, name=hparamTrials", elemType: HparamTuningTrial })
  hparamTrials?: HparamTuningTrial[];

  @SpeakeasyMetadata({ data: "json, name=labelColumns", elemType: StandardSqlField })
  labelColumns?: StandardSqlField[];

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=modelReference" })
  modelReference?: ModelReference;

  @SpeakeasyMetadata({ data: "json, name=modelType" })
  modelType?: ModelModelTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=optimalTrialIds" })
  optimalTrialIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=trainingRuns", elemType: TrainingRun })
  trainingRuns?: TrainingRun[];
}
