package shared

import (
	"time"
)

type Node struct {
	AvailabilityZone *string    `json:"AvailabilityZone"`
	CreateTime       *time.Time `json:"CreateTime"`
	Endpoint         *Endpoint  `json:"Endpoint"`
	Name             *string    `json:"Name"`
	Status           *string    `json:"Status"`
}
