package shared

import (
"time")

type ExecuteStatementOutput struct {
    ClusterIdentifier *string `json:"ClusterIdentifier,omitempty"`
    CreatedAt *time.Time `json:"CreatedAt,omitempty"`
    Database *string `json:"Database,omitempty"`
    DbUser *string `json:"DbUser,omitempty"`
    ID *string `json:"Id,omitempty"`
    SecretArn *string `json:"SecretArn,omitempty"`
    
}

