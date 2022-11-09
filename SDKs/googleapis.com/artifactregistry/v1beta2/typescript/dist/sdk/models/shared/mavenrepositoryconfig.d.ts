import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum MavenRepositoryConfigVersionPolicyEnum {
    VersionPolicyUnspecified = "VERSION_POLICY_UNSPECIFIED",
    Release = "RELEASE",
    Snapshot = "SNAPSHOT"
}
/**
 * MavenRepositoryConfig is maven related repository details. Provides additional configuration details for repositories of the maven format type.
**/
export declare class MavenRepositoryConfig extends SpeakeasyBase {
    allowSnapshotOverwrites?: boolean;
    versionPolicy?: MavenRepositoryConfigVersionPolicyEnum;
}
