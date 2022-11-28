package shared

// InstallationMedia
// Contains the installation media for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server.
type InstallationMedia struct {
	CustomAvailabilityZoneID    *string
	Engine                      *string
	EngineInstallationMediaPath *string
	EngineVersion               *string
	FailureCause                *InstallationMediaFailureCause
	InstallationMediaID         *string
	OsInstallationMediaPath     *string
	Status                      *string
}
