package shared

import (
"time")

type LexiconAttributes struct {
    Alphabet *string `json:"Alphabet,omitempty"`
    LanguageCode *LanguageCodeEnum `json:"LanguageCode,omitempty"`
    LastModified *time.Time `json:"LastModified,omitempty"`
    LexemesCount *int64 `json:"LexemesCount,omitempty"`
    LexiconArn *string `json:"LexiconArn,omitempty"`
    Size *int64 `json:"Size,omitempty"`
    
}

