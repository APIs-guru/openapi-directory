import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MavenRepositoryConfigVersionPolicyEnum {
    VersionPolicyUnspecified = "VERSION_POLICY_UNSPECIFIED"
,    Release = "RELEASE"
,    Snapshot = "SNAPSHOT"
}


// MavenRepositoryConfig
/** 
 * MavenRepositoryConfig is maven related repository details. Provides additional configuration details for repositories of the maven format type.
**/
export class MavenRepositoryConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowSnapshotOverwrites" })
  allowSnapshotOverwrites?: boolean;

  @Metadata({ data: "json, name=versionPolicy" })
  versionPolicy?: MavenRepositoryConfigVersionPolicyEnum;
}
