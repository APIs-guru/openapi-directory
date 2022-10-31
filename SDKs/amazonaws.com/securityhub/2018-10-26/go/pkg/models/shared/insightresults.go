package shared



type InsightResults struct {
    GroupByAttribute string `json:"GroupByAttribute"`
    InsightArn string `json:"InsightArn"`
    ResultValues []InsightResultValue `json:"ResultValues"`
    
}

