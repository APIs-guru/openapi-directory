package shared

// InstallationMediaFailureCause
// Contains the cause of an installation media failure. Installation media is used for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server.
type InstallationMediaFailureCause struct {
	Message *string
}
