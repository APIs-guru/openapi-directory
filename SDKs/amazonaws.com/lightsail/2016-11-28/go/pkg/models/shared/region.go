package shared

type Region struct {
	AvailabilityZones                   []AvailabilityZone `json:"availabilityZones"`
	ContinentCode                       *string            `json:"continentCode"`
	Description                         *string            `json:"description"`
	DisplayName                         *string            `json:"displayName"`
	Name                                *RegionNameEnum    `json:"name"`
	RelationalDatabaseAvailabilityZones []AvailabilityZone `json:"relationalDatabaseAvailabilityZones"`
}
