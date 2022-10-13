package shared

import (
	"time"
)

type LexiconAttributes struct {
	Alphabet     *string           `json:"Alphabet"`
	LanguageCode *LanguageCodeEnum `json:"LanguageCode"`
	LastModified *time.Time        `json:"LastModified"`
	LexemesCount *int64            `json:"LexemesCount"`
	LexiconArn   *string           `json:"LexiconArn"`
	Size         *int64            `json:"Size"`
}
