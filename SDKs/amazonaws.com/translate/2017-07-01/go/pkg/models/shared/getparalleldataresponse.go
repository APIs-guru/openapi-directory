package shared

type GetParallelDataResponse struct {
	AuxiliaryDataLocation                    *ParallelDataDataLocation `json:"AuxiliaryDataLocation"`
	DataLocation                             *ParallelDataDataLocation `json:"DataLocation"`
	LatestUpdateAttemptAuxiliaryDataLocation *ParallelDataDataLocation `json:"LatestUpdateAttemptAuxiliaryDataLocation"`
	ParallelDataProperties                   *ParallelDataProperties   `json:"ParallelDataProperties"`
}
