package shared

type StartTranscriptionJobRequest struct {
	ContentRedaction         *ContentRedaction     `json:"ContentRedaction"`
	IdentifyLanguage         *bool                 `json:"IdentifyLanguage"`
	JobExecutionSettings     *JobExecutionSettings `json:"JobExecutionSettings"`
	KmsEncryptionContext     map[string]string     `json:"KMSEncryptionContext"`
	LanguageCode             *LanguageCodeEnum     `json:"LanguageCode"`
	LanguageOptions          []LanguageCodeEnum    `json:"LanguageOptions"`
	Media                    Media                 `json:"Media"`
	MediaFormat              *MediaFormatEnum      `json:"MediaFormat"`
	MediaSampleRateHertz     *int64                `json:"MediaSampleRateHertz"`
	ModelSettings            *ModelSettings        `json:"ModelSettings"`
	OutputBucketName         *string               `json:"OutputBucketName"`
	OutputEncryptionKmsKeyID *string               `json:"OutputEncryptionKMSKeyId"`
	OutputKey                *string               `json:"OutputKey"`
	Settings                 *Settings             `json:"Settings"`
	Subtitles                *Subtitles            `json:"Subtitles"`
	Tags                     []Tag                 `json:"Tags"`
	TranscriptionJobName     string                `json:"TranscriptionJobName"`
}
