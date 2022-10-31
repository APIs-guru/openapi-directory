package shared



type GetParallelDataResponse struct {
    AuxiliaryDataLocation *ParallelDataDataLocation `json:"AuxiliaryDataLocation,omitempty"`
    DataLocation *ParallelDataDataLocation `json:"DataLocation,omitempty"`
    LatestUpdateAttemptAuxiliaryDataLocation *ParallelDataDataLocation `json:"LatestUpdateAttemptAuxiliaryDataLocation,omitempty"`
    ParallelDataProperties *ParallelDataProperties `json:"ParallelDataProperties,omitempty"`
    
}

