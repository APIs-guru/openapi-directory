package shared

import (
"time")

type StateMachineListItem struct {
    CreationDate time.Time `json:"creationDate"`
    Name string `json:"name"`
    StateMachineArn string `json:"stateMachineArn"`
    Type StateMachineTypeEnum `json:"type"`
    
}

