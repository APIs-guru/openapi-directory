package shared

type ListParallelDataResponse struct {
	NextToken                  *string                  `json:"NextToken"`
	ParallelDataPropertiesList []ParallelDataProperties `json:"ParallelDataPropertiesList"`
}
