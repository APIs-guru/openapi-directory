package operations


var ConfirmsPlantingServers = []string{
	"http://api.climatekuul.com:8000/footprint",
}

type ConfirmsPlantingRequestBody struct {
    APIKeyL1 string `form:"name=apiKey_l1"`
    APIKeyL2 string `form:"name=apiKey_l2"`
    ConfirmPlanting string `form:"name=confirmPlanting"`
    TransactionID string `form:"name=transaction_id"`
    
}

type ConfirmsPlantingRequest struct {
    ServerURL *string 
    Request *ConfirmsPlantingRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    
}

type ConfirmsPlantingResponse struct {
    ContentType string 
    StatusCode int64 
    
}

