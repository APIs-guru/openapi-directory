import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Artifact
/** 
 * Artifacts of resources. Artifacts are unique (single-value) per resource and are used to store metadata that is too large or numerous to be stored directly on the resource. Since artifacts are stored separately from parent resources, they should generally be used for metadata that is needed infrequently, i.e., not for display in primary views of the resource but perhaps displayed or downloaded upon request. The `ListArtifacts` method allows artifacts to be quickly enumerated and checked for presence without downloading their (potentially-large) contents.
**/
export class Artifact extends SpeakeasyBase {
  @Metadata({ data: "json, name=contents" })
  contents?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=hash" })
  hash?: string;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sizeBytes" })
  sizeBytes?: number;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
