package shared

import (
	"time"
)

type Connector struct {
	AssociatedOn   *time.Time                `json:"associatedOn"`
	CapabilityList []ConnectorCapabilityEnum `json:"capabilityList"`
	ConnectorID    *string                   `json:"connectorId"`
	IPAddress      *string                   `json:"ipAddress"`
	MacAddress     *string                   `json:"macAddress"`
	Status         *ConnectorStatusEnum      `json:"status"`
	Version        *string                   `json:"version"`
	VMManagerID    *string                   `json:"vmManagerId"`
	VMManagerName  *string                   `json:"vmManagerName"`
	VMManagerType  *VMManagerTypeEnum        `json:"vmManagerType"`
}
