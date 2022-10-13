package shared

import (
	"time"
)

type SynthesisTask struct {
	CreationTime      *time.Time           `json:"CreationTime"`
	Engine            *EngineEnum          `json:"Engine"`
	LanguageCode      *LanguageCodeEnum    `json:"LanguageCode"`
	LexiconNames      []string             `json:"LexiconNames"`
	OutputFormat      *OutputFormatEnum    `json:"OutputFormat"`
	OutputURI         *string              `json:"OutputUri"`
	RequestCharacters *int64               `json:"RequestCharacters"`
	SampleRate        *string              `json:"SampleRate"`
	SnsTopicArn       *string              `json:"SnsTopicArn"`
	SpeechMarkTypes   []SpeechMarkTypeEnum `json:"SpeechMarkTypes"`
	TaskID            *string              `json:"TaskId"`
	TaskStatus        *TaskStatusEnum      `json:"TaskStatus"`
	TaskStatusReason  *string              `json:"TaskStatusReason"`
	TextType          *TextTypeEnum        `json:"TextType"`
	VoiceID           *VoiceIDEnum         `json:"VoiceId"`
}
