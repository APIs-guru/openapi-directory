import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MavenArtifact
/** 
 * MavenArtifact represents a maven artifact.
**/
export class MavenArtifact extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifactId" })
  artifactId?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=groupId" })
  groupId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pomUri" })
  pomUri?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
