package shared




type AnomalyDetectorStatusEnum string

const (
    AnomalyDetectorStatusEnumActive AnomalyDetectorStatusEnum = "ACTIVE"
AnomalyDetectorStatusEnumActivating AnomalyDetectorStatusEnum = "ACTIVATING"
AnomalyDetectorStatusEnumDeleting AnomalyDetectorStatusEnum = "DELETING"
AnomalyDetectorStatusEnumFailed AnomalyDetectorStatusEnum = "FAILED"
AnomalyDetectorStatusEnumInactive AnomalyDetectorStatusEnum = "INACTIVE"
AnomalyDetectorStatusEnumLearning AnomalyDetectorStatusEnum = "LEARNING"
AnomalyDetectorStatusEnumBackTestActivating AnomalyDetectorStatusEnum = "BACK_TEST_ACTIVATING"
AnomalyDetectorStatusEnumBackTestActive AnomalyDetectorStatusEnum = "BACK_TEST_ACTIVE"
AnomalyDetectorStatusEnumBackTestComplete AnomalyDetectorStatusEnum = "BACK_TEST_COMPLETE"
)


