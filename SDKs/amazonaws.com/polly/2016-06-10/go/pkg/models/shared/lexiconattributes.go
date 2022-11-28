package shared

import (
	"time"
)

// LexiconAttributes
// Contains metadata describing the lexicon such as the number of lexemes, language code, and so on. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.
type LexiconAttributes struct {
	Alphabet     *string           `json:"Alphabet,omitempty"`
	LanguageCode *LanguageCodeEnum `json:"LanguageCode,omitempty"`
	LastModified *time.Time        `json:"LastModified,omitempty"`
	LexemesCount *int64            `json:"LexemesCount,omitempty"`
	LexiconArn   *string           `json:"LexiconArn,omitempty"`
	Size         *int64            `json:"Size,omitempty"`
}
