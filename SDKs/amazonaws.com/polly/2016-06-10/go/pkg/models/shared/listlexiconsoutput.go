package shared



type ListLexiconsOutput struct {
    Lexicons []LexiconDescription `json:"Lexicons,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

