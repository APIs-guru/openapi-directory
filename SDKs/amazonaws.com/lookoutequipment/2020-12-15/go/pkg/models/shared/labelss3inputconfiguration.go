package shared

type LabelsS3InputConfiguration struct {
	Bucket string  `json:"Bucket"`
	Prefix *string `json:"Prefix"`
}
