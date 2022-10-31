package shared



type WeeklyAutoScalingSchedule struct {
    Friday map[string]string `json:"Friday,omitempty"`
    Monday map[string]string `json:"Monday,omitempty"`
    Saturday map[string]string `json:"Saturday,omitempty"`
    Sunday map[string]string `json:"Sunday,omitempty"`
    Thursday map[string]string `json:"Thursday,omitempty"`
    Tuesday map[string]string `json:"Tuesday,omitempty"`
    Wednesday map[string]string `json:"Wednesday,omitempty"`
    
}

