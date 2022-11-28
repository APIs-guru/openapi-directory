package shared

// ParallelDataConfig
// Specifies the format and S3 location of the parallel data input file.
type ParallelDataConfig struct {
	Format ParallelDataFormatEnum `json:"Format"`
	S3URI  string                 `json:"S3Uri"`
}
