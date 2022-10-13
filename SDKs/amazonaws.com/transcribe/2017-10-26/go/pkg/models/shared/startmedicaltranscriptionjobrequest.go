package shared

type StartMedicalTranscriptionJobRequest struct {
	ContentIdentificationType   *MedicalContentIdentificationTypeEnum `json:"ContentIdentificationType"`
	KmsEncryptionContext        map[string]string                     `json:"KMSEncryptionContext"`
	LanguageCode                LanguageCodeEnum                      `json:"LanguageCode"`
	Media                       Media                                 `json:"Media"`
	MediaFormat                 *MediaFormatEnum                      `json:"MediaFormat"`
	MediaSampleRateHertz        *int64                                `json:"MediaSampleRateHertz"`
	MedicalTranscriptionJobName string                                `json:"MedicalTranscriptionJobName"`
	OutputBucketName            string                                `json:"OutputBucketName"`
	OutputEncryptionKmsKeyID    *string                               `json:"OutputEncryptionKMSKeyId"`
	OutputKey                   *string                               `json:"OutputKey"`
	Settings                    *MedicalTranscriptionSetting          `json:"Settings"`
	Specialty                   SpecialtyEnum                         `json:"Specialty"`
	Tags                        []Tag                                 `json:"Tags"`
	Type                        TypeEnum                              `json:"Type"`
}
