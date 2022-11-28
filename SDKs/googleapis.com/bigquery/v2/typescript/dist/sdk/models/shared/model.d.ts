import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { HparamSearchSpaces } from "./hparamsearchspaces";
import { ModelReference } from "./modelreference";
import { TrainingRunInput } from "./trainingrun";
import { StandardSqlField } from "./standardsqlfield";
import { HparamTuningTrial } from "./hparamtuningtrial";
import { TrainingRun } from "./trainingrun";
export declare enum ModelModelTypeEnum {
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
export declare class ModelInput extends SpeakeasyBase {
    bestTrialId?: string;
    description?: string;
    encryptionConfiguration?: EncryptionConfiguration;
    expirationTime?: string;
    friendlyName?: string;
    hparamSearchSpaces?: HparamSearchSpaces;
    labels?: Map<string, string>;
    modelReference?: ModelReference;
    trainingRuns?: TrainingRunInput[];
}
export declare class Model extends SpeakeasyBase {
    bestTrialId?: string;
    creationTime?: string;
    defaultTrialId?: string;
    description?: string;
    encryptionConfiguration?: EncryptionConfiguration;
    etag?: string;
    expirationTime?: string;
    featureColumns?: StandardSqlField[];
    friendlyName?: string;
    hparamSearchSpaces?: HparamSearchSpaces;
    hparamTrials?: HparamTuningTrial[];
    labelColumns?: StandardSqlField[];
    labels?: Map<string, string>;
    lastModifiedTime?: string;
    location?: string;
    modelReference?: ModelReference;
    modelType?: ModelModelTypeEnum;
    optimalTrialIds?: string[];
    trainingRuns?: TrainingRun[];
}
