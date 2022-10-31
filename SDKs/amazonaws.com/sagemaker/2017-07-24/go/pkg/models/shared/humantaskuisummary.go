package shared

import (
"time")

type HumanTaskUISummary struct {
    CreationTime time.Time `json:"CreationTime"`
    HumanTaskUIArn string `json:"HumanTaskUiArn"`
    HumanTaskUIName string `json:"HumanTaskUiName"`
    
}

