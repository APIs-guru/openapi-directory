package shared

type AnomalyDetectorStateValueEnum string

const (
	AnomalyDetectorStateValueEnumPendingTraining         AnomalyDetectorStateValueEnum = "PENDING_TRAINING"
	AnomalyDetectorStateValueEnumTrainedInsufficientData AnomalyDetectorStateValueEnum = "TRAINED_INSUFFICIENT_DATA"
	AnomalyDetectorStateValueEnumTrained                 AnomalyDetectorStateValueEnum = "TRAINED"
)
