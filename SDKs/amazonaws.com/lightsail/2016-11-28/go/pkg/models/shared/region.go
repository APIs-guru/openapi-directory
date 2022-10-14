package shared

type Region struct {
	AvailabilityZones                   []AvailabilityZone `json:"availabilityZones,omitempty"`
	ContinentCode                       *string            `json:"continentCode,omitempty"`
	Description                         *string            `json:"description,omitempty"`
	DisplayName                         *string            `json:"displayName,omitempty"`
	Name                                *RegionNameEnum    `json:"name,omitempty"`
	RelationalDatabaseAvailabilityZones []AvailabilityZone `json:"relationalDatabaseAvailabilityZones,omitempty"`
}
