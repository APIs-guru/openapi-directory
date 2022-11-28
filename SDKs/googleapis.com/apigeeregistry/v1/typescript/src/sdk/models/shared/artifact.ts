import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Artifact
/** 
 * Artifacts of resources. Artifacts are unique (single-value) per resource and are used to store metadata that is too large or numerous to be stored directly on the resource. Since artifacts are stored separately from parent resources, they should generally be used for metadata that is needed infrequently, i.e., not for display in primary views of the resource but perhaps displayed or downloaded upon request. The `ListArtifacts` method allows artifacts to be quickly enumerated and checked for presence without downloading their (potentially-large) contents.
**/
export class Artifact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contents" })
  contents?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=hash" })
  hash?: string;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sizeBytes" })
  sizeBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// ArtifactInput
/** 
 * Artifacts of resources. Artifacts are unique (single-value) per resource and are used to store metadata that is too large or numerous to be stored directly on the resource. Since artifacts are stored separately from parent resources, they should generally be used for metadata that is needed infrequently, i.e., not for display in primary views of the resource but perhaps displayed or downloaded upon request. The `ListArtifacts` method allows artifacts to be quickly enumerated and checked for presence without downloading their (potentially-large) contents.
**/
export class ArtifactInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contents" })
  contents?: string;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
