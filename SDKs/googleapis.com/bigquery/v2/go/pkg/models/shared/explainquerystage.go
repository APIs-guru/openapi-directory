package shared

type ExplainQueryStage struct {
	CompletedParallelInputs   *string            `json:"completedParallelInputs"`
	ComputeMsAvg              *string            `json:"computeMsAvg"`
	ComputeMsMax              *string            `json:"computeMsMax"`
	ComputeRatioAvg           *float64           `json:"computeRatioAvg"`
	ComputeRatioMax           *float64           `json:"computeRatioMax"`
	EndMs                     *string            `json:"endMs"`
	ID                        *string            `json:"id"`
	InputStages               []string           `json:"inputStages"`
	Name                      *string            `json:"name"`
	ParallelInputs            *string            `json:"parallelInputs"`
	ReadMsAvg                 *string            `json:"readMsAvg"`
	ReadMsMax                 *string            `json:"readMsMax"`
	ReadRatioAvg              *float64           `json:"readRatioAvg"`
	ReadRatioMax              *float64           `json:"readRatioMax"`
	RecordsRead               *string            `json:"recordsRead"`
	RecordsWritten            *string            `json:"recordsWritten"`
	ShuffleOutputBytes        *string            `json:"shuffleOutputBytes"`
	ShuffleOutputBytesSpilled *string            `json:"shuffleOutputBytesSpilled"`
	SlotMs                    *string            `json:"slotMs"`
	StartMs                   *string            `json:"startMs"`
	Status                    *string            `json:"status"`
	Steps                     []ExplainQueryStep `json:"steps"`
	WaitMsAvg                 *string            `json:"waitMsAvg"`
	WaitMsMax                 *string            `json:"waitMsMax"`
	WaitRatioAvg              *float64           `json:"waitRatioAvg"`
	WaitRatioMax              *float64           `json:"waitRatioMax"`
	WriteMsAvg                *string            `json:"writeMsAvg"`
	WriteMsMax                *string            `json:"writeMsMax"`
	WriteRatioAvg             *float64           `json:"writeRatioAvg"`
	WriteRatioMax             *float64           `json:"writeRatioMax"`
}
