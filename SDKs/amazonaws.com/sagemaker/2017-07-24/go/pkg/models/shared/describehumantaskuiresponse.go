package shared

import (
"time")

type DescribeHumanTaskUIResponse struct {
    CreationTime time.Time `json:"CreationTime"`
    HumanTaskUIArn string `json:"HumanTaskUiArn"`
    HumanTaskUIName string `json:"HumanTaskUiName"`
    HumanTaskUIStatus *HumanTaskUIStatusEnum `json:"HumanTaskUiStatus,omitempty"`
    UITemplate UITemplateInfo `json:"UiTemplate"`
    
}

