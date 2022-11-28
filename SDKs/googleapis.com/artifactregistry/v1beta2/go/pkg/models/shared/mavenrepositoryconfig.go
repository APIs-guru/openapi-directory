package shared

type MavenRepositoryConfigVersionPolicyEnum string

const (
	MavenRepositoryConfigVersionPolicyEnumVersionPolicyUnspecified MavenRepositoryConfigVersionPolicyEnum = "VERSION_POLICY_UNSPECIFIED"
	MavenRepositoryConfigVersionPolicyEnumRelease                  MavenRepositoryConfigVersionPolicyEnum = "RELEASE"
	MavenRepositoryConfigVersionPolicyEnumSnapshot                 MavenRepositoryConfigVersionPolicyEnum = "SNAPSHOT"
)

// MavenRepositoryConfig
// MavenRepositoryConfig is maven related repository details. Provides additional configuration details for repositories of the maven format type.
type MavenRepositoryConfig struct {
	AllowSnapshotOverwrites *bool                                   `json:"allowSnapshotOverwrites,omitempty"`
	VersionPolicy           *MavenRepositoryConfigVersionPolicyEnum `json:"versionPolicy,omitempty"`
}
