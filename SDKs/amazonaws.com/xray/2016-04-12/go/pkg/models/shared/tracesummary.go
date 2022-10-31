package shared

import (
	"time"
)

type TraceSummary struct {
	Annotations            map[string][]ValueWithServiceIds `json:"Annotations,omitempty"`
	AvailabilityZones      []AvailabilityZoneDetail         `json:"AvailabilityZones,omitempty"`
	Duration               *float64                         `json:"Duration,omitempty"`
	EntryPoint             *ServiceID                       `json:"EntryPoint,omitempty"`
	ErrorRootCauses        []ErrorRootCause                 `json:"ErrorRootCauses,omitempty"`
	FaultRootCauses        []FaultRootCause                 `json:"FaultRootCauses,omitempty"`
	HasError               *bool                            `json:"HasError,omitempty"`
	HasFault               *bool                            `json:"HasFault,omitempty"`
	HasThrottle            *bool                            `json:"HasThrottle,omitempty"`
	HTTP                   *HTTP                            `json:"Http,omitempty"`
	ID                     *string                          `json:"Id,omitempty"`
	InstanceIds            []InstanceIDDetail               `json:"InstanceIds,omitempty"`
	IsPartial              *bool                            `json:"IsPartial,omitempty"`
	MatchedEventTime       *time.Time                       `json:"MatchedEventTime,omitempty"`
	ResourceArNs           []ResourceArnDetail              `json:"ResourceARNs,omitempty"`
	ResponseTime           *float64                         `json:"ResponseTime,omitempty"`
	ResponseTimeRootCauses []ResponseTimeRootCause          `json:"ResponseTimeRootCauses,omitempty"`
	Revision               *int64                           `json:"Revision,omitempty"`
	ServiceIds             []ServiceID                      `json:"ServiceIds,omitempty"`
	Users                  []TraceUser                      `json:"Users,omitempty"`
}
