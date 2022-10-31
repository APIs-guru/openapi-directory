package shared

import (
"time")

type DescribeStreamProcessorResponse struct {
    CreationTimestamp *time.Time `json:"CreationTimestamp,omitempty"`
    Input *StreamProcessorInput `json:"Input,omitempty"`
    LastUpdateTimestamp *time.Time `json:"LastUpdateTimestamp,omitempty"`
    Name *string `json:"Name,omitempty"`
    Output *StreamProcessorOutput `json:"Output,omitempty"`
    RoleArn *string `json:"RoleArn,omitempty"`
    Settings *StreamProcessorSettings `json:"Settings,omitempty"`
    Status *StreamProcessorStatusEnum `json:"Status,omitempty"`
    StatusMessage *string `json:"StatusMessage,omitempty"`
    StreamProcessorArn *string `json:"StreamProcessorArn,omitempty"`
    
}

