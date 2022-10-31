package shared




type PerAppResultClearingResultEnum string

const (
    PerAppResultClearingResultEnumClearingResultUnspecified PerAppResultClearingResultEnum = "CLEARING_RESULT_UNSPECIFIED"
PerAppResultClearingResultEnumSuccess PerAppResultClearingResultEnum = "SUCCESS"
PerAppResultClearingResultEnumAppNotFound PerAppResultClearingResultEnum = "APP_NOT_FOUND"
PerAppResultClearingResultEnumAppProtected PerAppResultClearingResultEnum = "APP_PROTECTED"
PerAppResultClearingResultEnumAPILevel PerAppResultClearingResultEnum = "API_LEVEL"
)


type PerAppResult struct {
    ClearingResult *PerAppResultClearingResultEnum `json:"clearingResult,omitempty"`
    
}

