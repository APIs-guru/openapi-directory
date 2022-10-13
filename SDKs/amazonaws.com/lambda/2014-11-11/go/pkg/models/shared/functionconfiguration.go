package shared

import (
	"time"
)

type FunctionConfiguration struct {
	CodeSize        *int64       `json:"CodeSize"`
	ConfigurationID *string      `json:"ConfigurationId"`
	Description     *string      `json:"Description"`
	FunctionArn     *string      `json:"FunctionARN"`
	FunctionName    *string      `json:"FunctionName"`
	Handler         *string      `json:"Handler"`
	LastModified    *time.Time   `json:"LastModified"`
	MemorySize      *int64       `json:"MemorySize"`
	Mode            *ModeEnum    `json:"Mode"`
	Role            *string      `json:"Role"`
	Runtime         *RuntimeEnum `json:"Runtime"`
	Timeout         *int64       `json:"Timeout"`
}
