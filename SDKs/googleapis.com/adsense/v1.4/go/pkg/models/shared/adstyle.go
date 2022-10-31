package shared



type AdStyleColors struct {
    Background *string `json:"background,omitempty"`
    Border *string `json:"border,omitempty"`
    Text *string `json:"text,omitempty"`
    Title *string `json:"title,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type AdStyleFont struct {
    Family *string `json:"family,omitempty"`
    Size *string `json:"size,omitempty"`
    
}

type AdStyle struct {
    Colors *AdStyleColors `json:"colors,omitempty"`
    Corners *string `json:"corners,omitempty"`
    Font *AdStyleFont `json:"font,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

