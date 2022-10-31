package shared

import (
	"time"
)

type Connector struct {
	AssociatedOn   *time.Time                `json:"associatedOn,omitempty"`
	CapabilityList []ConnectorCapabilityEnum `json:"capabilityList,omitempty"`
	ConnectorID    *string                   `json:"connectorId,omitempty"`
	IPAddress      *string                   `json:"ipAddress,omitempty"`
	MacAddress     *string                   `json:"macAddress,omitempty"`
	Status         *ConnectorStatusEnum      `json:"status,omitempty"`
	Version        *string                   `json:"version,omitempty"`
	VMManagerID    *string                   `json:"vmManagerId,omitempty"`
	VMManagerName  *string                   `json:"vmManagerName,omitempty"`
	VMManagerType  *VMManagerTypeEnum        `json:"vmManagerType,omitempty"`
}
