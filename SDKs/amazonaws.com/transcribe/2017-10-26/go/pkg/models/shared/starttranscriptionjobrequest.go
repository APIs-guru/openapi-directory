package shared

type StartTranscriptionJobRequest struct {
	ContentRedaction         *ContentRedaction     `json:"ContentRedaction,omitempty"`
	IdentifyLanguage         *bool                 `json:"IdentifyLanguage,omitempty"`
	JobExecutionSettings     *JobExecutionSettings `json:"JobExecutionSettings,omitempty"`
	KmsEncryptionContext     map[string]string     `json:"KMSEncryptionContext,omitempty"`
	LanguageCode             *LanguageCodeEnum     `json:"LanguageCode,omitempty"`
	LanguageOptions          []LanguageCodeEnum    `json:"LanguageOptions,omitempty"`
	Media                    Media                 `json:"Media"`
	MediaFormat              *MediaFormatEnum      `json:"MediaFormat,omitempty"`
	MediaSampleRateHertz     *int64                `json:"MediaSampleRateHertz,omitempty"`
	ModelSettings            *ModelSettings        `json:"ModelSettings,omitempty"`
	OutputBucketName         *string               `json:"OutputBucketName,omitempty"`
	OutputEncryptionKmsKeyID *string               `json:"OutputEncryptionKMSKeyId,omitempty"`
	OutputKey                *string               `json:"OutputKey,omitempty"`
	Settings                 *Settings             `json:"Settings,omitempty"`
	Subtitles                *Subtitles            `json:"Subtitles,omitempty"`
	Tags                     []Tag                 `json:"Tags,omitempty"`
	TranscriptionJobName     string                `json:"TranscriptionJobName"`
}
