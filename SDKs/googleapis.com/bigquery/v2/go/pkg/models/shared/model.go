package shared




type ModelModelTypeEnum string

const (
    ModelModelTypeEnumModelTypeUnspecified ModelModelTypeEnum = "MODEL_TYPE_UNSPECIFIED"
ModelModelTypeEnumLinearRegression ModelModelTypeEnum = "LINEAR_REGRESSION"
ModelModelTypeEnumLogisticRegression ModelModelTypeEnum = "LOGISTIC_REGRESSION"
ModelModelTypeEnumKmeans ModelModelTypeEnum = "KMEANS"
ModelModelTypeEnumMatrixFactorization ModelModelTypeEnum = "MATRIX_FACTORIZATION"
ModelModelTypeEnumDnnClassifier ModelModelTypeEnum = "DNN_CLASSIFIER"
ModelModelTypeEnumTensorflow ModelModelTypeEnum = "TENSORFLOW"
ModelModelTypeEnumDnnRegressor ModelModelTypeEnum = "DNN_REGRESSOR"
ModelModelTypeEnumBoostedTreeRegressor ModelModelTypeEnum = "BOOSTED_TREE_REGRESSOR"
ModelModelTypeEnumBoostedTreeClassifier ModelModelTypeEnum = "BOOSTED_TREE_CLASSIFIER"
ModelModelTypeEnumArima ModelModelTypeEnum = "ARIMA"
ModelModelTypeEnumAutomlRegressor ModelModelTypeEnum = "AUTOML_REGRESSOR"
ModelModelTypeEnumAutomlClassifier ModelModelTypeEnum = "AUTOML_CLASSIFIER"
ModelModelTypeEnumPca ModelModelTypeEnum = "PCA"
ModelModelTypeEnumDnnLinearCombinedClassifier ModelModelTypeEnum = "DNN_LINEAR_COMBINED_CLASSIFIER"
ModelModelTypeEnumDnnLinearCombinedRegressor ModelModelTypeEnum = "DNN_LINEAR_COMBINED_REGRESSOR"
ModelModelTypeEnumAutoencoder ModelModelTypeEnum = "AUTOENCODER"
ModelModelTypeEnumArimaPlus ModelModelTypeEnum = "ARIMA_PLUS"
)


type Model struct {
    BestTrialID *string `json:"bestTrialId,omitempty"`
    CreationTime *string `json:"creationTime,omitempty"`
    DefaultTrialID *string `json:"defaultTrialId,omitempty"`
    Description *string `json:"description,omitempty"`
    EncryptionConfiguration *EncryptionConfiguration `json:"encryptionConfiguration,omitempty"`
    Etag *string `json:"etag,omitempty"`
    ExpirationTime *string `json:"expirationTime,omitempty"`
    FeatureColumns []StandardSQLField `json:"featureColumns,omitempty"`
    FriendlyName *string `json:"friendlyName,omitempty"`
    HparamSearchSpaces *HparamSearchSpaces `json:"hparamSearchSpaces,omitempty"`
    HparamTrials []HparamTuningTrial `json:"hparamTrials,omitempty"`
    LabelColumns []StandardSQLField `json:"labelColumns,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    LastModifiedTime *string `json:"lastModifiedTime,omitempty"`
    Location *string `json:"location,omitempty"`
    ModelReference *ModelReference `json:"modelReference,omitempty"`
    ModelType *ModelModelTypeEnum `json:"modelType,omitempty"`
    OptimalTrialIds []string `json:"optimalTrialIds,omitempty"`
    TrainingRuns []TrainingRun `json:"trainingRuns,omitempty"`
    
}

