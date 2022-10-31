package shared

import (
	"time"
)

type FunctionConfiguration struct {
	CodeSize        *int64       `json:"CodeSize,omitempty"`
	ConfigurationID *string      `json:"ConfigurationId,omitempty"`
	Description     *string      `json:"Description,omitempty"`
	FunctionArn     *string      `json:"FunctionARN,omitempty"`
	FunctionName    *string      `json:"FunctionName,omitempty"`
	Handler         *string      `json:"Handler,omitempty"`
	LastModified    *time.Time   `json:"LastModified,omitempty"`
	MemorySize      *int64       `json:"MemorySize,omitempty"`
	Mode            *ModeEnum    `json:"Mode,omitempty"`
	Role            *string      `json:"Role,omitempty"`
	Runtime         *RuntimeEnum `json:"Runtime,omitempty"`
	Timeout         *int64       `json:"Timeout,omitempty"`
}
