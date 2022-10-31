package shared

import (
"time")

type SynthesisTask struct {
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    Engine *EngineEnum `json:"Engine,omitempty"`
    LanguageCode *LanguageCodeEnum `json:"LanguageCode,omitempty"`
    LexiconNames []string `json:"LexiconNames,omitempty"`
    OutputFormat *OutputFormatEnum `json:"OutputFormat,omitempty"`
    OutputURI *string `json:"OutputUri,omitempty"`
    RequestCharacters *int64 `json:"RequestCharacters,omitempty"`
    SampleRate *string `json:"SampleRate,omitempty"`
    SnsTopicArn *string `json:"SnsTopicArn,omitempty"`
    SpeechMarkTypes []SpeechMarkTypeEnum `json:"SpeechMarkTypes,omitempty"`
    TaskID *string `json:"TaskId,omitempty"`
    TaskStatus *TaskStatusEnum `json:"TaskStatus,omitempty"`
    TaskStatusReason *string `json:"TaskStatusReason,omitempty"`
    TextType *TextTypeEnum `json:"TextType,omitempty"`
    VoiceID *VoiceIDEnum `json:"VoiceId,omitempty"`
    
}

