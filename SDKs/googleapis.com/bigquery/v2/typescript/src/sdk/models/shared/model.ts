import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { StandardSqlField } from "./standardsqlfield";
import { HparamSearchSpaces } from "./hparamsearchspaces";
import { HparamTuningTrial } from "./hparamtuningtrial";
import { StandardSqlField } from "./standardsqlfield";
import { ModelReference } from "./modelreference";
import { TrainingRun } from "./trainingrun";

export enum ModelModelTypeEnum {
    ModelTypeUnspecified = "MODEL_TYPE_UNSPECIFIED"
,    LinearRegression = "LINEAR_REGRESSION"
,    LogisticRegression = "LOGISTIC_REGRESSION"
,    Kmeans = "KMEANS"
,    MatrixFactorization = "MATRIX_FACTORIZATION"
,    DnnClassifier = "DNN_CLASSIFIER"
,    Tensorflow = "TENSORFLOW"
,    DnnRegressor = "DNN_REGRESSOR"
,    BoostedTreeRegressor = "BOOSTED_TREE_REGRESSOR"
,    BoostedTreeClassifier = "BOOSTED_TREE_CLASSIFIER"
,    Arima = "ARIMA"
,    AutomlRegressor = "AUTOML_REGRESSOR"
,    AutomlClassifier = "AUTOML_CLASSIFIER"
,    Pca = "PCA"
,    DnnLinearCombinedClassifier = "DNN_LINEAR_COMBINED_CLASSIFIER"
,    DnnLinearCombinedRegressor = "DNN_LINEAR_COMBINED_REGRESSOR"
,    Autoencoder = "AUTOENCODER"
,    ArimaPlus = "ARIMA_PLUS"
}


export class Model extends SpeakeasyBase {
  @Metadata({ data: "json, name=bestTrialId" })
  bestTrialId?: string;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=defaultTrialId" })
  defaultTrialId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=encryptionConfiguration" })
  encryptionConfiguration?: EncryptionConfiguration;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=expirationTime" })
  expirationTime?: string;

  @Metadata({ data: "json, name=featureColumns", elemType: shared.StandardSqlField })
  featureColumns?: StandardSqlField[];

  @Metadata({ data: "json, name=friendlyName" })
  friendlyName?: string;

  @Metadata({ data: "json, name=hparamSearchSpaces" })
  hparamSearchSpaces?: HparamSearchSpaces;

  @Metadata({ data: "json, name=hparamTrials", elemType: shared.HparamTuningTrial })
  hparamTrials?: HparamTuningTrial[];

  @Metadata({ data: "json, name=labelColumns", elemType: shared.StandardSqlField })
  labelColumns?: StandardSqlField[];

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=modelReference" })
  modelReference?: ModelReference;

  @Metadata({ data: "json, name=modelType" })
  modelType?: ModelModelTypeEnum;

  @Metadata({ data: "json, name=optimalTrialIds" })
  optimalTrialIds?: string[];

  @Metadata({ data: "json, name=trainingRuns", elemType: shared.TrainingRun })
  trainingRuns?: TrainingRun[];
}
