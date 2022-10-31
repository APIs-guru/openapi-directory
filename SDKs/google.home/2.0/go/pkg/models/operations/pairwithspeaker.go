package operations

import (
"openapi/pkg/models/shared")

type PairwithSpeakerRequest struct {
    Request shared.PairwithSpeakerRequest `request:"mediaType=application/json"`
    
}

type PairwithSpeakerResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

