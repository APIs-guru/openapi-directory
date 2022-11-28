import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MavenRepositoryConfigVersionPolicyEnum {
    VersionPolicyUnspecified = "VERSION_POLICY_UNSPECIFIED",
    Release = "RELEASE",
    Snapshot = "SNAPSHOT"
}


// MavenRepositoryConfig
/** 
 * MavenRepositoryConfig is maven related repository details. Provides additional configuration details for repositories of the maven format type.
**/
export class MavenRepositoryConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowSnapshotOverwrites" })
  allowSnapshotOverwrites?: boolean;

  @SpeakeasyMetadata({ data: "json, name=versionPolicy" })
  versionPolicy?: MavenRepositoryConfigVersionPolicyEnum;
}
