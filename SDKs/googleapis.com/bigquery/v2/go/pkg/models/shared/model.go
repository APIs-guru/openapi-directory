package shared

type ModelModelTypeEnum string

const (
	ModelModelTypeEnumModelTypeUnspecified        ModelModelTypeEnum = "MODEL_TYPE_UNSPECIFIED"
	ModelModelTypeEnumLinearRegression            ModelModelTypeEnum = "LINEAR_REGRESSION"
	ModelModelTypeEnumLogisticRegression          ModelModelTypeEnum = "LOGISTIC_REGRESSION"
	ModelModelTypeEnumKmeans                      ModelModelTypeEnum = "KMEANS"
	ModelModelTypeEnumMatrixFactorization         ModelModelTypeEnum = "MATRIX_FACTORIZATION"
	ModelModelTypeEnumDnnClassifier               ModelModelTypeEnum = "DNN_CLASSIFIER"
	ModelModelTypeEnumTensorflow                  ModelModelTypeEnum = "TENSORFLOW"
	ModelModelTypeEnumDnnRegressor                ModelModelTypeEnum = "DNN_REGRESSOR"
	ModelModelTypeEnumBoostedTreeRegressor        ModelModelTypeEnum = "BOOSTED_TREE_REGRESSOR"
	ModelModelTypeEnumBoostedTreeClassifier       ModelModelTypeEnum = "BOOSTED_TREE_CLASSIFIER"
	ModelModelTypeEnumArima                       ModelModelTypeEnum = "ARIMA"
	ModelModelTypeEnumAutomlRegressor             ModelModelTypeEnum = "AUTOML_REGRESSOR"
	ModelModelTypeEnumAutomlClassifier            ModelModelTypeEnum = "AUTOML_CLASSIFIER"
	ModelModelTypeEnumPca                         ModelModelTypeEnum = "PCA"
	ModelModelTypeEnumDnnLinearCombinedClassifier ModelModelTypeEnum = "DNN_LINEAR_COMBINED_CLASSIFIER"
	ModelModelTypeEnumDnnLinearCombinedRegressor  ModelModelTypeEnum = "DNN_LINEAR_COMBINED_REGRESSOR"
	ModelModelTypeEnumAutoencoder                 ModelModelTypeEnum = "AUTOENCODER"
	ModelModelTypeEnumArimaPlus                   ModelModelTypeEnum = "ARIMA_PLUS"
)

type Model struct {
	BestTrialID             *string                  `json:"bestTrialId"`
	CreationTime            *string                  `json:"creationTime"`
	DefaultTrialID          *string                  `json:"defaultTrialId"`
	Description             *string                  `json:"description"`
	EncryptionConfiguration *EncryptionConfiguration `json:"encryptionConfiguration"`
	Etag                    *string                  `json:"etag"`
	ExpirationTime          *string                  `json:"expirationTime"`
	FeatureColumns          []StandardSQLField       `json:"featureColumns"`
	FriendlyName            *string                  `json:"friendlyName"`
	HparamSearchSpaces      *HparamSearchSpaces      `json:"hparamSearchSpaces"`
	HparamTrials            []HparamTuningTrial      `json:"hparamTrials"`
	LabelColumns            []StandardSQLField       `json:"labelColumns"`
	Labels                  map[string]string        `json:"labels"`
	LastModifiedTime        *string                  `json:"lastModifiedTime"`
	Location                *string                  `json:"location"`
	ModelReference          *ModelReference          `json:"modelReference"`
	ModelType               *ModelModelTypeEnum      `json:"modelType"`
	OptimalTrialIds         []string                 `json:"optimalTrialIds"`
	TrainingRuns            []TrainingRun            `json:"trainingRuns"`
}
