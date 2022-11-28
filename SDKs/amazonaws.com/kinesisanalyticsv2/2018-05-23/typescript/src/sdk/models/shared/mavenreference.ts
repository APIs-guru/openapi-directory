import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MavenReference
/** 
 * The information required to specify a Maven reference. You can use Maven references to specify dependency JAR files.
**/
export class MavenReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArtifactId" })
  artifactId: string;

  @SpeakeasyMetadata({ data: "json, name=GroupId" })
  groupId: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version: string;
}
