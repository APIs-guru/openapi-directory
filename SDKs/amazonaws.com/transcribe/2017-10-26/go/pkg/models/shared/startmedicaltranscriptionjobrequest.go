package shared

type StartMedicalTranscriptionJobRequest struct {
	ContentIdentificationType   *MedicalContentIdentificationTypeEnum `json:"ContentIdentificationType,omitempty"`
	KmsEncryptionContext        map[string]string                     `json:"KMSEncryptionContext,omitempty"`
	LanguageCode                LanguageCodeEnum                      `json:"LanguageCode"`
	Media                       Media                                 `json:"Media"`
	MediaFormat                 *MediaFormatEnum                      `json:"MediaFormat,omitempty"`
	MediaSampleRateHertz        *int64                                `json:"MediaSampleRateHertz,omitempty"`
	MedicalTranscriptionJobName string                                `json:"MedicalTranscriptionJobName"`
	OutputBucketName            string                                `json:"OutputBucketName"`
	OutputEncryptionKmsKeyID    *string                               `json:"OutputEncryptionKMSKeyId,omitempty"`
	OutputKey                   *string                               `json:"OutputKey,omitempty"`
	Settings                    *MedicalTranscriptionSetting          `json:"Settings,omitempty"`
	Specialty                   SpecialtyEnum                         `json:"Specialty"`
	Tags                        []Tag                                 `json:"Tags,omitempty"`
	Type                        TypeEnum                              `json:"Type"`
}
