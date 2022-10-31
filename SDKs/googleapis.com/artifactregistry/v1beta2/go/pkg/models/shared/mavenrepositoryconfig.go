package shared




type MavenRepositoryConfigVersionPolicyEnum string

const (
    MavenRepositoryConfigVersionPolicyEnumVersionPolicyUnspecified MavenRepositoryConfigVersionPolicyEnum = "VERSION_POLICY_UNSPECIFIED"
MavenRepositoryConfigVersionPolicyEnumRelease MavenRepositoryConfigVersionPolicyEnum = "RELEASE"
MavenRepositoryConfigVersionPolicyEnumSnapshot MavenRepositoryConfigVersionPolicyEnum = "SNAPSHOT"
)


type MavenRepositoryConfig struct {
    AllowSnapshotOverwrites *bool `json:"allowSnapshotOverwrites,omitempty"`
    VersionPolicy *MavenRepositoryConfigVersionPolicyEnum `json:"versionPolicy,omitempty"`
    
}

