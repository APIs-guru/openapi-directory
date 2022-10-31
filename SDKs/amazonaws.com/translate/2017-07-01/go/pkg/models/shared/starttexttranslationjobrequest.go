package shared



type StartTextTranslationJobRequest struct {
    ClientToken string `json:"ClientToken"`
    DataAccessRoleArn string `json:"DataAccessRoleArn"`
    InputDataConfig InputDataConfig `json:"InputDataConfig"`
    JobName *string `json:"JobName,omitempty"`
    OutputDataConfig OutputDataConfig `json:"OutputDataConfig"`
    ParallelDataNames []string `json:"ParallelDataNames,omitempty"`
    SourceLanguageCode string `json:"SourceLanguageCode"`
    TargetLanguageCodes []string `json:"TargetLanguageCodes"`
    TerminologyNames []string `json:"TerminologyNames,omitempty"`
    
}

