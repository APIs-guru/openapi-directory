import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MavenReference
/** 
 * The information required to specify a Maven reference. You can use Maven references to specify dependency JAR files.
**/
export class MavenReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArtifactId" })
  artifactId: string;

  @Metadata({ data: "json, name=GroupId" })
  groupId: string;

  @Metadata({ data: "json, name=Version" })
  version: string;
}
