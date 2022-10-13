package shared

import (
	"time"
)

type TraceSummary struct {
	Annotations            map[string][]ValueWithServiceIds `json:"Annotations"`
	AvailabilityZones      []AvailabilityZoneDetail         `json:"AvailabilityZones"`
	Duration               *float64                         `json:"Duration"`
	EntryPoint             *ServiceID                       `json:"EntryPoint"`
	ErrorRootCauses        []ErrorRootCause                 `json:"ErrorRootCauses"`
	FaultRootCauses        []FaultRootCause                 `json:"FaultRootCauses"`
	HasError               *bool                            `json:"HasError"`
	HasFault               *bool                            `json:"HasFault"`
	HasThrottle            *bool                            `json:"HasThrottle"`
	HTTP                   *HTTP                            `json:"Http"`
	ID                     *string                          `json:"Id"`
	InstanceIds            []InstanceIDDetail               `json:"InstanceIds"`
	IsPartial              *bool                            `json:"IsPartial"`
	MatchedEventTime       *time.Time                       `json:"MatchedEventTime"`
	ResourceArNs           []ResourceArnDetail              `json:"ResourceARNs"`
	ResponseTime           *float64                         `json:"ResponseTime"`
	ResponseTimeRootCauses []ResponseTimeRootCause          `json:"ResponseTimeRootCauses"`
	Revision               *int64                           `json:"Revision"`
	ServiceIds             []ServiceID                      `json:"ServiceIds"`
	Users                  []TraceUser                      `json:"Users"`
}
