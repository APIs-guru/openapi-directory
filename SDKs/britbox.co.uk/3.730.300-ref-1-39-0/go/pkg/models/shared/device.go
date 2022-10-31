package shared

import (
"time")

type Device struct {
    ID string `json:"id"`
    Name string `json:"name"`
    RegistrationDate time.Time `json:"registrationDate"`
    Type string `json:"type"`
    
}

