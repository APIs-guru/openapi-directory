package operations



type ReposGetCodeFrequencyStatsPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposGetCodeFrequencyStatsRequest struct {
    PathParams ReposGetCodeFrequencyStatsPathParams 
    
}

type ReposGetCodeFrequencyStatsResponse struct {
    ContentType string 
    StatusCode int64 
    CodeFrequencyStats [][]int64 
    ReposGetCodeFrequencyStats202ApplicationJSONObject map[string]interface{} 
    
}

