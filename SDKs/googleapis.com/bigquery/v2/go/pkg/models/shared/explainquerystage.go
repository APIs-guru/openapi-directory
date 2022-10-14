package shared

type ExplainQueryStage struct {
	CompletedParallelInputs   *string            `json:"completedParallelInputs,omitempty"`
	ComputeMsAvg              *string            `json:"computeMsAvg,omitempty"`
	ComputeMsMax              *string            `json:"computeMsMax,omitempty"`
	ComputeRatioAvg           *float64           `json:"computeRatioAvg,omitempty"`
	ComputeRatioMax           *float64           `json:"computeRatioMax,omitempty"`
	EndMs                     *string            `json:"endMs,omitempty"`
	ID                        *string            `json:"id,omitempty"`
	InputStages               []string           `json:"inputStages,omitempty"`
	Name                      *string            `json:"name,omitempty"`
	ParallelInputs            *string            `json:"parallelInputs,omitempty"`
	ReadMsAvg                 *string            `json:"readMsAvg,omitempty"`
	ReadMsMax                 *string            `json:"readMsMax,omitempty"`
	ReadRatioAvg              *float64           `json:"readRatioAvg,omitempty"`
	ReadRatioMax              *float64           `json:"readRatioMax,omitempty"`
	RecordsRead               *string            `json:"recordsRead,omitempty"`
	RecordsWritten            *string            `json:"recordsWritten,omitempty"`
	ShuffleOutputBytes        *string            `json:"shuffleOutputBytes,omitempty"`
	ShuffleOutputBytesSpilled *string            `json:"shuffleOutputBytesSpilled,omitempty"`
	SlotMs                    *string            `json:"slotMs,omitempty"`
	StartMs                   *string            `json:"startMs,omitempty"`
	Status                    *string            `json:"status,omitempty"`
	Steps                     []ExplainQueryStep `json:"steps,omitempty"`
	WaitMsAvg                 *string            `json:"waitMsAvg,omitempty"`
	WaitMsMax                 *string            `json:"waitMsMax,omitempty"`
	WaitRatioAvg              *float64           `json:"waitRatioAvg,omitempty"`
	WaitRatioMax              *float64           `json:"waitRatioMax,omitempty"`
	WriteMsAvg                *string            `json:"writeMsAvg,omitempty"`
	WriteMsMax                *string            `json:"writeMsMax,omitempty"`
	WriteRatioAvg             *float64           `json:"writeRatioAvg,omitempty"`
	WriteRatioMax             *float64           `json:"writeRatioMax,omitempty"`
}
