package shared

import (
"time")

type Qualification struct {
    GrantTime *time.Time `json:"GrantTime,omitempty"`
    IntegerValue *int64 `json:"IntegerValue,omitempty"`
    LocaleValue *Locale `json:"LocaleValue,omitempty"`
    QualificationTypeID *string `json:"QualificationTypeId,omitempty"`
    Status *QualificationStatusEnum `json:"Status,omitempty"`
    WorkerID *string `json:"WorkerId,omitempty"`
    
}

