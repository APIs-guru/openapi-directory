package shared

import (
"time")

type CreateStateMachineOutput struct {
    CreationDate time.Time `json:"creationDate"`
    StateMachineArn string `json:"stateMachineArn"`
    
}

